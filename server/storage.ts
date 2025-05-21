import {
  type User,
  type InsertUser,
  type Order,
  type InsertOrder,
  type Contact,
  type InsertContact,
  type Service,
  type Testimonial,
  type ChatMessage,
} from "@shared/schema";
import session from "express-session";
import MemoryStore from "memorystore";

const ONE_DAY = 1000 * 60 * 60 * 24;
const MemoryStoreSession = MemoryStore(session);

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
  updateOrder(id: number, order: Partial<InsertOrder>): Promise<Order | undefined>;

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

export class Storage implements IStorage {
  private users: User[] = [];
  private orders: Order[] = [];
  private contacts: Contact[] = [];
  private services: Service[] = [];
  private testimonials: Testimonial[] = [];
  private chatMessages: ChatMessage[] = [];
  private store: any;
  sessionStore: any;

  constructor() {
    this.store = new MemoryStoreSession({
      checkPeriod: ONE_DAY
    });
    this.sessionStore = this.store;
  }

  getSessionMiddleware() {
    return session({
      store: this.store,
      secret: process.env.SESSION_SECRET || 'default_secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: ONE_DAY
      }
    });
  }

  // Initialize the database with default sample data
  async initializeDatabase(): Promise<void> {
    // Add sample services if none exist
    if (this.services.length === 0) {
      this.services = [
        {
          id: 1,
          name: "Professional Dry Cleaning",
          description: "The process of dry cleaning usually begins with the treatment of soils and spots by hand.",
          price: "From $8.99 per item",
          imageUrl: "https://images.unsplash.com/photo-1604335398150-fe580a7d8d18",
        },
        {
          id: 2,
          name: "Wash & Fold",
          description: "Convenient laundry service with professional washing, drying, and folding.",
          price: "$2.99 per pound",
          imageUrl: "https://images.unsplash.com/photo-1604335398980-ededcadcc37d",
        },
        {
          id: 3,
          name: "Alterations & Tailoring",
          description: "Expert tailoring, hemming, repairs, and custom alterations for perfect fit.",
          price: "Starting at $12.99",
          imageUrl: "https://images.unsplash.com/photo-1623000850261-6972be2fe6c6",
        },
      ];
    }

    // Add sample testimonials if none exist
    if (this.testimonials.length === 0) {
      this.testimonials = [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "Regular Customer",
          content: "Their pickup and delivery service has made my life so much easier.",
          rating: 5,
        },
        {
          id: 2,
          name: "Rebecca Miller",
          role: "Bride",
          content: "I had a delicate wedding dress that needed cleaning, and they treated it with such care.",
          rating: 5,
        },
        {
          id: 3,
          name: "Michael Thompson",
          role: "Business Executive",
          content: "As a business professional with a busy schedule, Signature Cleaners has been a lifesaver.",
          rating: 5,
        },
      ];
    }
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const newUser = { ...insertUser, id: this.users.length + 1 };
    this.users.push(newUser);
    return newUser;
  }

  async updateUser(id: number, userData: Partial<InsertUser>): Promise<User | undefined> {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return undefined;
    this.users[index] = { ...this.users[index], ...userData };
    return this.users[index];
  }

  // Order methods
  async getOrder(id: number): Promise<Order | undefined> {
    return this.orders.find(order => order.id === id);
  }

  async getOrdersByUserId(userId: number): Promise<Order[]> {
    return this.orders.filter(order => order.userId === userId);
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const newOrder = { ...insertOrder, id: this.orders.length + 1, createdAt: new Date() };
    this.orders.push(newOrder);
    return newOrder;
  }

  async updateOrder(id: number, orderData: Partial<InsertOrder>): Promise<Order | undefined> {
    const index = this.orders.findIndex(order => order.id === id);
    if (index === -1) return undefined;
    this.orders[index] = { ...this.orders[index], ...orderData };
    return this.orders[index];
  }

  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const newContact = { ...insertContact, id: this.contacts.length + 1 };
    this.contacts.push(newContact);
    return newContact;
  }

  // Service methods
  async getServices(): Promise<Service[]> {
    return this.services;
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.find(service => service.id === id);
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonials;
  }

  // Chat methods
  async getChatMessages(userId: number): Promise<ChatMessage[]> {
    return this.chatMessages.filter(msg => msg.userId === userId);
  }

  async addChatMessage(message: Omit<ChatMessage, "id">): Promise<ChatMessage> {
    const newMessage = { ...message, id: this.chatMessages.length + 1 };
    this.chatMessages.push(newMessage);
    return newMessage;
  }
}

// Create and export storage instance
export const storage = new Storage();