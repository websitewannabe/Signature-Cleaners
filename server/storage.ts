
import session from "express-session";
import MemoryStore from "memorystore";
import { User, Order } from '../shared/schema';
import { db } from './db';

const ONE_DAY = 1000 * 60 * 60 * 24;
const MemoryStoreSession = MemoryStore(session);

// In-memory data stores for non-user/order data
const memoryStore = {
  services: [
    {
      id: 1,
      name: "Professional Dry Cleaning",
      description: "Expert dry cleaning services"
    }
  ],
  testimonials: [],
  chatMessages: []
};

export interface IStorage {
  initializeDatabase(): Promise<void>;
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User>;
  updateUser(id: string, data: Partial<User>): Promise<User | undefined>;
  getOrder(id: string): Promise<Order | undefined>;
  getOrdersByUserId(userId: string): Promise<Order[]>;
  createOrder(orderData: Omit<Order, 'id' | 'createdAt'>): Promise<Order>;
  updateOrder(id: string, data: Partial<Order>): Promise<Order | undefined>;
  deleteOrder(id: string): Promise<boolean>;
  getServices(): Promise<any[]>;
  getTestimonials(): Promise<any[]>;
  getChatMessages(userId: string): Promise<any[]>;
  addChatMessage(message: any): Promise<any>;
}

export class Storage implements IStorage {
  private store: any;
  sessionStore: any;

  constructor() {
    this.store = new MemoryStoreSession({
      checkPeriod: ONE_DAY
    });
    this.sessionStore = this.store;
  }

  async initializeDatabase(): Promise<void> {
    return Promise.resolve();
  }

  // User operations
  async getUser(id: string): Promise<User | undefined> {
    return db.findUserById(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return db.findUserByEmail(email);
  }

  async createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const user: User = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    return db.createUser(user);
  }

  async updateUser(id: string, data: Partial<User>): Promise<User | undefined> {
    return db.updateUser(id, data);
  }

  // Order operations
  async getOrder(id: string): Promise<Order | undefined> {
    return db.findOrderById(id);
  }

  async getOrdersByUserId(userId: string): Promise<Order[]> {
    return db.findOrdersByUserId(userId);
  }

  async createOrder(orderData: Omit<Order, 'id' | 'createdAt'>): Promise<Order> {
    const order: Order = {
      ...orderData,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    return db.createOrder(order);
  }

  async updateOrder(id: string, data: Partial<Order>): Promise<Order | undefined> {
    return db.updateOrder(id, data);
  }

  async deleteOrder(id: string): Promise<boolean> {
    return db.deleteOrder(id);
  }

  // Other data operations
  async getServices(): Promise<any[]> {
    return memoryStore.services;
  }

  async getTestimonials(): Promise<any[]> {
    return memoryStore.testimonials;
  }

  async getChatMessages(userId: string): Promise<any[]> {
    return memoryStore.chatMessages.filter(m => m.userId === userId);
  }

  async addChatMessage(message: any): Promise<any> {
    const newMessage = { ...message, id: Date.now() };
    memoryStore.chatMessages.push(newMessage);
    return newMessage;
  }

  getSessionMiddleware() {
    return session({
      secret: process.env.SESSION_SECRET || 'dev-secret-key',
      resave: false,
      saveUninitialized: false,
      store: this.sessionStore,
      cookie: {
        maxAge: ONE_DAY,
        secure: process.env.NODE_ENV === 'production'
      }
    });
  }
}

export const storage = new Storage();
