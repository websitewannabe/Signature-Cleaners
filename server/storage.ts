import {
  chatMessages,
  contacts,
  orders,
  services,
  testimonials,
  users,
  type ChatMessage,
  type Contact,
  type InsertContact,
  type InsertOrder,
  type InsertUser,
  type Order,
  type Service,
  type Testimonial,
  type User,
} from "@shared/schema";
import connectPg from "connect-pg-simple";
import { desc, eq } from "drizzle-orm";
import session from "express-session";
import MemoryStore from "memorystore";
import pg from "pg";
import { db, isUsingPostgres } from "./db";

// Create session store based on database type
let sessionStore: any;

if (isUsingPostgres && process.env.DATABASE_URL) {
  // Use PostgreSQL session store
  const PostgresSessionStore = connectPg(session);
  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });
  sessionStore = new PostgresSessionStore({
    pool,
    createTableIfMissing: true,
  });
  console.log("📦 Using PostgreSQL session store");
} else {
  // Use memory store for development
  const MemoryStoreConstructor = MemoryStore(session);
  sessionStore = new MemoryStoreConstructor({
    checkPeriod: 86400000, // prune expired entries every 24h
  });
  console.log("📦 Using memory session store for development");
}

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
    order: Partial<InsertOrder>
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
    // Use the appropriate session store
    this.sessionStore = sessionStore;
  }

  // Initialize the database with default sample data
  async initializeDatabase(): Promise<void> {
    try {
      // For SQLite, tables will be created automatically on first insert
      if (!isUsingPostgres) {
        console.log("🏗️  Using SQLite in-memory database for development");

        // For SQLite in-memory, we need to manually create the schema
        try {
          console.log("📝 Creating SQLite tables...");

          // Get the raw SQLite database connection to run CREATE TABLE statements
          const sqliteDb = (db as any).session.client;

          // Create tables manually using raw SQL
          sqliteDb.exec(`
            CREATE TABLE IF NOT EXISTS services (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              description TEXT NOT NULL,
              price TEXT NOT NULL,
              image_url TEXT
            );
            
            CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              username TEXT NOT NULL UNIQUE,
              password TEXT NOT NULL,
              full_name TEXT NOT NULL,
              email TEXT NOT NULL,
              phone TEXT,
              address TEXT
            );
            
            CREATE TABLE IF NOT EXISTS orders (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_id INTEGER NOT NULL,
              status TEXT NOT NULL,
              service_type TEXT NOT NULL,
              pickup_date TEXT NOT NULL,
              pickup_time TEXT NOT NULL,
              delivery_date TEXT,
              delivery_time TEXT,
              notes TEXT,
              created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
            );
            
            CREATE TABLE IF NOT EXISTS contacts (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              email TEXT NOT NULL,
              subject TEXT NOT NULL,
              message TEXT NOT NULL,
              created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
              resolved INTEGER DEFAULT 0
            );
            
            CREATE TABLE IF NOT EXISTS testimonials (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              role TEXT,
              content TEXT NOT NULL,
              rating INTEGER NOT NULL
            );
            
            CREATE TABLE IF NOT EXISTS chat_messages (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_id INTEGER,
              content TEXT NOT NULL,
              is_agent INTEGER DEFAULT 0,
              timestamp TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
            );
          `);

          console.log("✅ SQLite tables created successfully");
        } catch (tableError) {
          console.error("❌ Error creating tables:", tableError);
          throw tableError;
        }
      }

      // Check if services table has data
      let serviceCount: any[] = [];
      try {
        serviceCount = await db.select().from(services);
        console.log(`📊 Found ${serviceCount.length} existing services`);
      } catch (error) {
        console.error("❌ Error querying services table:", error);
        throw error;
      }

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
      let testimonialCount: any[] = [];
      try {
        testimonialCount = await db.select().from(testimonials);
      } catch (error) {
        // Table doesn't exist yet
        console.log("📝 Testimonials table will be created on first use");
      }

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
      // Don't crash the app if database initialization fails
      if (!isUsingPostgres) {
        console.log("⚠️  Running without database persistence (memory only)");
      }
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
    userData: Partial<InsertUser>
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
    orderData: Partial<InsertOrder>
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
