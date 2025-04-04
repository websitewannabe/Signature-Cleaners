import { 
  users, type User, type InsertUser,
  orders, type Order, type InsertOrder,
  contacts, type Contact, type InsertContact,
  services, type Service,
  testimonials, type Testimonial,
  chatMessages, type ChatMessage
} from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

// modify the interface with any CRUD methods
// you might need
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
  addChatMessage(message: Omit<ChatMessage, 'id'>): Promise<ChatMessage>;
  
  // Session store
  sessionStore: session.SessionStore;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private orders: Map<number, Order>;
  private contacts: Map<number, Contact>;
  private services: Map<number, Service>;
  private testimonials: Map<number, Testimonial>;
  private chatMessages: Map<number, ChatMessage>;
  
  sessionStore: session.SessionStore;
  
  currentUserId: number;
  currentOrderId: number;
  currentContactId: number;
  currentChatMessageId: number;

  constructor() {
    this.users = new Map();
    this.orders = new Map();
    this.contacts = new Map();
    this.chatMessages = new Map();
    
    this.currentUserId = 1;
    this.currentOrderId = 1;
    this.currentContactId = 1;
    this.currentChatMessageId = 1;
    
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    });
    
    // Initialize sample services
    this.services = new Map([
      [1, {
        id: 1,
        name: "Dry Cleaning",
        description: "Professional care for your delicate garments, suits, dresses, and formal wear.",
        price: "From $8.99 per item",
        imageUrl: "https://images.unsplash.com/photo-1604335398150-fe580a7d8d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }],
      [2, {
        id: 2,
        name: "Wash & Fold",
        description: "Convenient laundry service with professional washing, drying, and folding.",
        price: "$2.99 per pound",
        imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }],
      [3, {
        id: 3,
        name: "Alterations & Repairs",
        description: "Expert tailoring, hemming, repairs, and custom alterations for perfect fit.",
        price: "Starting at $12.99",
        imageUrl: "https://images.unsplash.com/photo-1623000850261-6972be2fe6c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }]
    ]);
    
    // Initialize sample testimonials
    this.testimonials = new Map([
      [1, {
        id: 1,
        name: "Sarah Johnson",
        role: "Regular Customer",
        content: "Their pickup and delivery service has made my life so much easier. The quality of cleaning is exceptional, and my clothes always look brand new.",
        rating: 5
      }],
      [2, {
        id: 2,
        name: "Rebecca Miller",
        role: "Bride",
        content: "I had a delicate wedding dress that needed cleaning, and they treated it with such care. Their attention to detail is outstanding, and I couldn't be happier with the results.",
        rating: 5
      }],
      [3, {
        id: 3,
        name: "Michael Thompson",
        role: "Business Executive",
        content: "As a business professional with a busy schedule, Signature Cleaners has been a lifesaver. Their customer portal makes it easy to track my orders and schedule new pickups.",
        rating: 5
      }]
    ]);
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }
  
  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async updateUser(id: number, userData: Partial<InsertUser>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) {
      return undefined;
    }
    
    const updatedUser = { ...user, ...userData };
    this.users.set(id, updatedUser);
    return updatedUser;
  }
  
  // Order methods
  async getOrder(id: number): Promise<Order | undefined> {
    return this.orders.get(id);
  }
  
  async getOrdersByUserId(userId: number): Promise<Order[]> {
    return Array.from(this.orders.values()).filter(
      (order) => order.userId === userId,
    );
  }
  
  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = this.currentOrderId++;
    const order: Order = { 
      ...insertOrder, 
      id,
      createdAt: new Date() 
    };
    this.orders.set(id, order);
    return order;
  }
  
  async updateOrder(id: number, orderData: Partial<InsertOrder>): Promise<Order | undefined> {
    const order = this.orders.get(id);
    if (!order) {
      return undefined;
    }
    
    const updatedOrder = { ...order, ...orderData };
    this.orders.set(id, updatedOrder);
    return updatedOrder;
  }
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date(),
      resolved: false 
    };
    this.contacts.set(id, contact);
    return contact;
  }
  
  // Service methods
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }
  
  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }
  
  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  // Chat methods
  async getChatMessages(userId: number): Promise<ChatMessage[]> {
    return Array.from(this.chatMessages.values())
      .filter(message => message.userId === userId)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }
  
  async addChatMessage(message: Omit<ChatMessage, 'id'>): Promise<ChatMessage> {
    const id = this.currentChatMessageId++;
    const chatMessage: ChatMessage = { 
      ...message, 
      id,
    };
    this.chatMessages.set(id, chatMessage);
    return chatMessage;
  }
}

export const storage = new MemStorage();
