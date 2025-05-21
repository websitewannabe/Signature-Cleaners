import {
  users,
  type User,
  type InsertUser,
  orders,
  type Order,
  type InsertOrder,
  contacts,
  type Contact,
  type InsertContact,
  services,
  type Service,
  testimonials,
  type Testimonial,
  chatMessages,
  type ChatMessage,
} from "@shared/schema";
import { db } from "./db";
import { eq, and, desc } from "drizzle-orm";
import session from "express-session";
import connectPg from "connect-pg-simple";
import pg from "pg";

// Create a PostgreSQL session store
const PostgresSessionStore = connectPg(session);
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Interface for all storage operations
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, user: Partial<InsertUser>): Promise<User | undefined>;

  // Order methods
  getOrder(id: number): Promise<Order | undefined>;
  getOrdersByUserId(userId: number): Promise<Order[]>;
  createOrder(order: InsertOrder): Promise<Order>;
  updateOrder(
    id: number,
    order: Partial<InsertOrder>,
  ): Promise<Order | undefined>;

  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;

  // Service methods
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;

  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;

  // Chat methods
  getChatMessages(userId: number): Promise<ChatMessage[]>;
  addChatMessage(message: Omit<ChatMessage, "id">): Promise<ChatMessage>;

  // Session store
  sessionStore: any;

  // Database initialization method
  initializeDatabase(): Promise<void>;
}

// Database storage implementation
export class DatabaseStorage implements IStorage {
  sessionStore: any;

  constructor() {
    // Initialize PostgreSQL session store
    this.sessionStore = new PostgresSessionStore({
      pool,
      createTableIfMissing: true,
    });
  }

  // Initialize the database with default sample data
  async initializeDatabase(): Promise<void> {
    try {
      // Check if services table has data
      const serviceCount = await db.select().from(services);
      if (serviceCount.length === 0) {
        // Add sample services
        await db.insert(services).values([
          {
            name: "Professional Dry Cleaning",
            description:
              "The process of dry cleaning usually begins with the treatment of soils and spots by hand. After this is complete, the clothing is put inside of a machine which work up the clothing in a manner similar to a washing machine. Cleaning product is added to the process, of course, and the stains are removed from the clothing. When this is done, the final process begins, that of drying and then “pressing”, the process which gives your shirts that crisp, smooth feel upon pick-up.",
            price: "From $8.99 per item",
            imageUrl:
              "https://images.unsplash.com/photo-1604335398150-fe580a7d8d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Wash & Fold",
            description:
              "Convenient laundry service with professional washing, drying, and folding.",
            price: "$2.99 per pound",
            imageUrl:
              "https://images.unsplash.com/photo-1604335398980-ededcadcc37d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHJ5JTIwY2xlYW5lcnN8ZW58MHx8MHx8fDA%3D",
          },
          {
            name: "Alterations & Tailoring",
            description:
              "Expert tailoring, hemming, repairs, and custom alterations for perfect fit.",
            price: "Starting at $12.99",
            imageUrl:
              "https://images.unsplash.com/photo-1623000850261-6972be2fe6c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          },
        ]);
      }

      // Check if testimonials table has data
      const testimonialCount = await db.select().from(testimonials);
      if (testimonialCount.length === 0) {
        // Add sample testimonials
        await db.insert(testimonials).values([
          {
            name: "Sarah Johnson",
            role: "Regular Customer",
            content:
              "Their pickup and delivery service has made my life so much easier. The quality of cleaning is exceptional, and my clothes always look brand new.",
            rating: 5,
          },
          {
            name: "Rebecca Miller",
            role: "Bride",
            content:
              "I had a delicate wedding dress that needed cleaning, and they treated it with such care. Their attention to detail is outstanding, and I couldn't be happier with the results.",
            rating: 5,
          },
          {
            name: "Michael Thompson",
            role: "Business Executive",
            content:
              "As a business professional with a busy schedule, Signature Cleaners has been a lifesaver. Their customer portal makes it easy to track my orders and schedule new pickups.",
            rating: 5,
          },
        ]);
      }
    } catch (error) {
      console.error("Error initializing database:", error);
    }
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.username, username));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async updateUser(
    id: number,
    userData: Partial<InsertUser>,
  ): Promise<User | undefined> {
    const [updatedUser] = await db
      .update(users)
      .set(userData)
      .where(eq(users.id, id))
      .returning();
    return updatedUser;
  }

  // Order methods
  async getOrder(id: number): Promise<Order | undefined> {
    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    return order;
  }

  async getOrdersByUserId(userId: number): Promise<Order[]> {
    return db
      .select()
      .from(orders)
      .where(eq(orders.userId, userId))
      .orderBy(desc(orders.createdAt));
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const [order] = await db.insert(orders).values(insertOrder).returning();
    return order;
  }

  async updateOrder(
    id: number,
    orderData: Partial<InsertOrder>,
  ): Promise<Order | undefined> {
    const [updatedOrder] = await db
      .update(orders)
      .set(orderData)
      .where(eq(orders.id, id))
      .returning();
    return updatedOrder;
  }

  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  // Service methods
  async getServices(): Promise<Service[]> {
    return db.select().from(services);
  }

  async getService(id: number): Promise<Service | undefined> {
    const [service] = await db
      .select()
      .from(services)
      .where(eq(services.id, id));
    return service;
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return db.select().from(testimonials);
  }

  // Chat methods
  async getChatMessages(userId: number): Promise<ChatMessage[]> {
    return db
      .select()
      .from(chatMessages)
      .where(eq(chatMessages.userId, userId))
      .orderBy(chatMessages.timestamp);
  }

  async addChatMessage(message: Omit<ChatMessage, "id">): Promise<ChatMessage> {
    const [chatMessage] = await db
      .insert(chatMessages)
      .values(message)
      .returning();
    return chatMessage;
  }
}

// Create and export storage instance
export const storage = new DatabaseStorage();
