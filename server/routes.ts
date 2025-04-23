import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";
import { WebSocketServer, WebSocket } from "ws";
import { z } from "zod";
import { insertContactSchema, insertOrderSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes
  setupAuth(app);

  // API Routes
  // Services
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: "Error fetching services" });
    }
  });

  app.get("/api/services/:id", async (req, res) => {
    try {
      const service = await storage.getService(parseInt(req.params.id));
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      res.status(500).json({ message: "Error fetching service" });
    }
  });

  // Testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Error fetching testimonials" });
    }
  });

  // Contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      const response = await fetch("https://api.mydrycleaner.com/q", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          RequestType: "MessageToManagerNoUser",
          AccountKey: process.env.ACCOUNT_KEY,
          SessionID: process.env.SESSION_ID,
          Parameters: {
            Subject: subject,
            Message: message,
            FromEmail: email,
            Name: name
          },
        }),
      });

      if (!response.ok) {
        console.error('API Response:', {
          status: response.status,
          statusText: response.statusText,
          body: await response.text()
        });
        throw new Error(`Failed to send message: ${response.statusText}`);
      }

      const data = await response.json();
      res.status(201).json(data);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ 
        message: "Error submitting contact form",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Order management - protected routes
  app.post("/api/orders", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Authentication required" });
    }

    try {
      const orderData = insertOrderSchema.parse({
        ...req.body,
        userId: req.user.id,
        status: "pending"
      });
      
      const order = await storage.createOrder(orderData);
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid order data", errors: error.errors });
      }
      res.status(500).json({ message: "Error creating order" });
    }
  });

  app.get("/api/orders", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Authentication required" });
    }

    try {
      const orders = await storage.getOrdersByUserId(req.user.id);
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: "Error fetching orders" });
    }
  });

  app.get("/api/orders/:id", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Authentication required" });
    }

    try {
      const order = await storage.getOrder(parseInt(req.params.id));
      
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      
      if (order.userId !== req.user.id) {
        return res.status(403).json({ message: "Not authorized to view this order" });
      }
      
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: "Error fetching order" });
    }
  });

  // Schedule pickups for non-logged in users
  app.post("/api/schedule", async (req, res) => {
    try {
      // Validate input data
      const { fullName, email, phone, address, serviceType, pickupDate, pickupTime, notes } = req.body;
      
      if (!fullName || !email || !phone || !address || !serviceType || !pickupDate || !pickupTime) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // For guest scheduling, just confirm the appointment without storing it
      // In a real implementation, this would be stored in the database
      res.status(200).json({ 
        message: "Pickup scheduled successfully",
        confirmationNumber: `SC-${Date.now().toString().slice(-6)}` 
      });
    } catch (error) {
      res.status(500).json({ message: "Error scheduling pickup" });
    }
  });

  // Chat messages
  app.get("/api/chat", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Authentication required" });
    }

    try {
      const messages = await storage.getChatMessages(req.user.id);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Error fetching chat messages" });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  // WebSocket server for live chat - use a non-conflicting path
  const wss = new WebSocketServer({ server: httpServer, path: '/api/chat-ws' });

  wss.on('connection', (ws) => {
    ws.on('message', async (message) => {
      try {
        // Parse incoming message
        const data = JSON.parse(message.toString());
        
        // If user is authenticated, save the message
        if (data.userId) {
          await storage.addChatMessage({
            userId: data.userId,
            content: data.content,
            isAgent: false,
            timestamp: new Date()
          });
          
          // Simulate a response from an agent after a short delay
          setTimeout(async () => {
            const agentResponse = await storage.addChatMessage({
              userId: data.userId,
              content: "Thank you for your message. A customer service representative will respond shortly.",
              isAgent: true,
              timestamp: new Date()
            });
            
            // Send response back to the client if still connected
            if (ws.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify(agentResponse));
            }
          }, 1000);
        }
      } catch (error) {
        console.error('Error processing WebSocket message:', error);
      }
    });
    
    // Send a welcome message
    ws.send(JSON.stringify({
      id: 0,
      content: "Hello! Welcome to Signature Cleaners. How can I help you today?",
      isAgent: true,
      timestamp: new Date()
    }));
  });

  return httpServer;
}
