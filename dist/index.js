var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  chatMessages: () => chatMessages,
  contacts: () => contacts,
  insertContactSchema: () => insertContactSchema,
  insertOrderSchema: () => insertOrderSchema,
  insertUserSchema: () => insertUserSchema,
  orders: () => orders,
  services: () => services,
  testimonials: () => testimonials,
  users: () => users
});
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  address: text("address")
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  fullName: true,
  email: true,
  phone: true,
  address: true
});
var orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  status: text("status").notNull(),
  serviceType: text("service_type").notNull(),
  pickupDate: text("pickup_date").notNull(),
  pickupTime: text("pickup_time").notNull(),
  deliveryDate: text("delivery_date"),
  deliveryTime: text("delivery_time"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertOrderSchema = createInsertSchema(orders).pick({
  userId: true,
  status: true,
  serviceType: true,
  pickupDate: true,
  pickupTime: true,
  deliveryDate: true,
  deliveryTime: true,
  notes: true
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  resolved: boolean("resolved").default(false)
});
var insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  subject: true,
  message: true
});
var services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull(),
  imageUrl: text("image_url")
});
var testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role"),
  content: text("content").notNull(),
  rating: integer("rating").notNull()
});
var chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"),
  content: text("content").notNull(),
  isAgent: boolean("is_agent").default(false),
  timestamp: timestamp("timestamp").defaultNow().notNull()
});

// server/db.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}
var client = postgres(process.env.DATABASE_URL);
var db = drizzle(client, { schema: schema_exports });

// server/storage.ts
import { eq, desc } from "drizzle-orm";
import session from "express-session";
import connectPg from "connect-pg-simple";
import pg from "pg";
var PostgresSessionStore = connectPg(session);
var pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});
var DatabaseStorage = class {
  sessionStore;
  constructor() {
    this.sessionStore = new PostgresSessionStore({
      pool,
      createTableIfMissing: true
    });
  }
  // Initialize the database with default sample data
  async initializeDatabase() {
    try {
      const serviceCount = await db.select().from(services);
      if (serviceCount.length === 0) {
        await db.insert(services).values([
          {
            name: "Professional Dry Cleaning",
            description: "The process of dry cleaning usually begins with the treatment of soils and spots by hand. After this is complete, the clothing is put inside of a machine which work up the clothing in a manner similar to a washing machine. Cleaning product is added to the process, of course, and the stains are removed from the clothing. When this is done, the final process begins, that of drying and then \u201Cpressing\u201D, the process which gives your shirts that crisp, smooth feel upon pick-up.",
            price: "From $8.99 per item",
            imageUrl: "https://images.unsplash.com/photo-1604335398150-fe580a7d8d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Wash & Fold",
            description: "Convenient laundry service with professional washing, drying, and folding.",
            price: "$2.99 per pound",
            imageUrl: "https://images.unsplash.com/photo-1604335398980-ededcadcc37d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHJ5JTIwY2xlYW5lcnN8ZW58MHx8MHx8fDA%3D"
          },
          {
            name: "Alterations & Tailoring",
            description: "Expert tailoring, hemming, repairs, and custom alterations for perfect fit.",
            price: "Starting at $12.99",
            imageUrl: "https://images.unsplash.com/photo-1623000850261-6972be2fe6c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
          }
        ]);
      }
      const testimonialCount = await db.select().from(testimonials);
      if (testimonialCount.length === 0) {
        await db.insert(testimonials).values([
          {
            name: "Sarah Johnson",
            role: "Regular Customer",
            content: "Their pickup and delivery service has made my life so much easier. The quality of cleaning is exceptional, and my clothes always look brand new.",
            rating: 5
          },
          {
            name: "Rebecca Miller",
            role: "Bride",
            content: "I had a delicate wedding dress that needed cleaning, and they treated it with such care. Their attention to detail is outstanding, and I couldn't be happier with the results.",
            rating: 5
          },
          {
            name: "Michael Thompson",
            role: "Business Executive",
            content: "As a business professional with a busy schedule, Signature Cleaners has been a lifesaver. Their customer portal makes it easy to track my orders and schedule new pickups.",
            rating: 5
          }
        ]);
      }
    } catch (error) {
      console.error("Error initializing database:", error);
    }
  }
  // User methods
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  async getUserByUsername(username) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }
  async getUserByEmail(email) {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async updateUser(id, userData) {
    const [updatedUser] = await db.update(users).set(userData).where(eq(users.id, id)).returning();
    return updatedUser;
  }
  // Order methods
  async getOrder(id) {
    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    return order;
  }
  async getOrdersByUserId(userId) {
    return db.select().from(orders).where(eq(orders.userId, userId)).orderBy(desc(orders.createdAt));
  }
  async createOrder(insertOrder) {
    const [order] = await db.insert(orders).values(insertOrder).returning();
    return order;
  }
  async updateOrder(id, orderData) {
    const [updatedOrder] = await db.update(orders).set(orderData).where(eq(orders.id, id)).returning();
    return updatedOrder;
  }
  // Contact methods
  async createContact(insertContact) {
    const [contact] = await db.insert(contacts).values(insertContact).returning();
    return contact;
  }
  // Service methods
  async getServices() {
    return db.select().from(services);
  }
  async getService(id) {
    const [service] = await db.select().from(services).where(eq(services.id, id));
    return service;
  }
  // Testimonial methods
  async getTestimonials() {
    return db.select().from(testimonials);
  }
  // Chat methods
  async getChatMessages(userId) {
    return db.select().from(chatMessages).where(eq(chatMessages.userId, userId)).orderBy(chatMessages.timestamp);
  }
  async addChatMessage(message) {
    const [chatMessage] = await db.insert(chatMessages).values(message).returning();
    return chatMessage;
  }
};
var storage = new DatabaseStorage();

// server/auth.ts
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session2 from "express-session";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
var scryptAsync = promisify(scrypt);
async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const buf = await scryptAsync(password, salt, 64);
  return `${buf.toString("hex")}.${salt}`;
}
async function comparePasswords(supplied, stored) {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = await scryptAsync(supplied, salt, 64);
  return timingSafeEqual(hashedBuf, suppliedBuf);
}
function setupAuth(app2) {
  const sessionSettings = {
    secret: process.env.SESSION_SECRET || "signature-cleaners-secret",
    resave: false,
    saveUninitialized: false,
    store: storage.sessionStore,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1e3
      // 30 days
    }
  };
  app2.set("trust proxy", 1);
  app2.use(session2(sessionSettings));
  app2.use(passport.initialize());
  app2.use(passport.session());
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const user = await storage.getUserByUsername(username);
      if (!user || !await comparePasswords(password, user.password)) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    })
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    const user = await storage.getUser(id);
    done(null, user);
  });
  app2.post("/api/register", async (req, res, next) => {
    try {
      const existingUser = await storage.getUserByUsername(req.body.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      const existingEmail = await storage.getUserByEmail(req.body.email);
      if (existingEmail) {
        return res.status(400).json({ message: "Email already in use" });
      }
      const user = await storage.createUser({
        ...req.body,
        password: await hashPassword(req.body.password)
      });
      req.login(user, (err) => {
        if (err) return next(err);
        const { password, ...userWithoutPassword } = user;
        res.status(201).json(userWithoutPassword);
      });
    } catch (error) {
      next(error);
    }
  });
  app2.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.status(401).json({ message: "Invalid username or password" });
      req.login(user, (err2) => {
        if (err2) return next(err2);
        const { password, ...userWithoutPassword } = user;
        res.status(200).json(userWithoutPassword);
      });
    })(req, res, next);
  });
  app2.post("/api/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      res.sendStatus(200);
    });
  });
  app2.get("/api/user", (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const { password, ...userWithoutPassword } = req.user;
    res.json(userWithoutPassword);
  });
}

// server/routes.ts
import { WebSocketServer, WebSocket } from "ws";
import { z } from "zod";
async function registerRoutes(app2) {
  setupAuth(app2);
  app2.get("/api/services", async (req, res) => {
    try {
      const services2 = await storage.getServices();
      res.json(services2);
    } catch (error) {
      res.status(500).json({ message: "Error fetching services" });
    }
  });
  app2.get("/api/services/:id", async (req, res) => {
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
  app2.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials2 = await storage.getTestimonials();
      res.json(testimonials2);
    } catch (error) {
      res.status(500).json({ message: "Error fetching testimonials" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      const [firstName, ...lastNameParts] = name.trim().split(" ");
      const lastName = lastNameParts.join(" ");
      const password = Math.random().toString(36).slice(-12) + Math.random().toString(36).slice(-12);
      const tokenResponse = await fetch("https://api.mydrycleaner.com/q", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          RequestType: "GetToken",
          AccountKey: process.env.ACCOUNT_KEY,
          SecurityID: process.env.SECURITY_ID
        })
      });
      if (!tokenResponse.ok) {
        throw new Error("Failed to get token");
      }
      const tokenData = await tokenResponse.json();
      const response = await fetch("https://api.mydrycleaner.com/q", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          RequestType: "Signup",
          AccountKey: process.env.ACCOUNT_KEY,
          SessionID: tokenData.ReturnObject.SessionID,
          Parameters: {
            AccountNodeID: process.env.SECURITY_ID,
            Firstname: firstName,
            Lastname: lastName || "",
            EmailAddress: email,
            Password: password,
            ClientAccountID: "",
            ServiceType: "RETAIL"
          }
        })
      });
      if (!response.ok) {
        console.error("API Response:", {
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
  app2.post("/api/orders", async (req, res) => {
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
  app2.get("/api/orders", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Authentication required" });
    }
    try {
      const orders2 = await storage.getOrdersByUserId(req.user.id);
      res.json(orders2);
    } catch (error) {
      res.status(500).json({ message: "Error fetching orders" });
    }
  });
  app2.get("/api/orders/:id", async (req, res) => {
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
  app2.post("/api/schedule", async (req, res) => {
    try {
      const {
        fullName,
        email,
        phone,
        address,
        serviceType,
        pickupDate,
        pickupTime,
        notes
      } = req.body;
      if (!fullName || !email || !phone || !address || !serviceType || !pickupDate || !pickupTime) {
        return res.status(400).json({ message: "All fields are required" });
      }
      res.status(200).json({
        message: "Pickup scheduled successfully",
        confirmationNumber: `SC-${Date.now().toString().slice(-6)}`
      });
    } catch (error) {
      res.status(500).json({ message: "Error scheduling pickup" });
    }
  });
  app2.get("/api/chat", async (req, res) => {
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
  const httpServer = createServer(app2);
  const wss = new WebSocketServer({ server: httpServer, path: "/api/chat-ws" });
  wss.on("connection", (ws) => {
    ws.on("message", async (message) => {
      try {
        const data = JSON.parse(message.toString());
        if (data.userId) {
          await storage.addChatMessage({
            userId: data.userId,
            content: data.content,
            isAgent: false,
            timestamp: /* @__PURE__ */ new Date()
          });
          setTimeout(async () => {
            const agentResponse = await storage.addChatMessage({
              userId: data.userId,
              content: "Thank you for your message. A customer service representative will respond shortly.",
              isAgent: true,
              timestamp: /* @__PURE__ */ new Date()
            });
            if (ws.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify(agentResponse));
            }
          }, 1e3);
        }
      } catch (error) {
        console.error("Error processing WebSocket message:", error);
      }
    });
    ws.send(
      JSON.stringify({
        id: 0,
        content: "Hello! Welcome to Signature Cleaners. How can I help you today?",
        isAgent: true,
        timestamp: /* @__PURE__ */ new Date()
      })
    );
  });
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    host: "0.0.0.0",
    port: 5e3,
    hmr: {
      protocol: "ws",
      port: 5e3,
      timeout: 12e4
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: {
      ...vite_config_default.server?.hmr,
      server
    },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: {
      ...vite_config_default.server,
      ...serverOptions
    },
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  try {
    await storage.initializeDatabase();
    log("Database initialized successfully");
  } catch (error) {
    console.error("Failed to initialize database:", error);
  }
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
