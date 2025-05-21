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

// Define in-memory storage
const memoryStore = {
  services: [],
  testimonials: [],
  chatMessages: [],
  orders: [],
};

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
      // Initialize with default data
      memoryStore.services = [
        {
          id: 1,
          name: "Professional Dry Cleaning",
          description: "Expert dry cleaning services"
        }
      ];
      memoryStore.testimonials = [];
      memoryStore.chatMessages = [];
      memoryStore.orders = [];
      return Promise.resolve();
    } catch (error) {
      console.error("Failed to initialize storage:", error);
      return Promise.resolve();
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