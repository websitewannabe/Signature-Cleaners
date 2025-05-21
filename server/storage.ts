
import session from "express-session";
import MemoryStore from "memorystore";

const ONE_DAY = 1000 * 60 * 60 * 24;
const MemoryStoreSession = MemoryStore(session);

// In-memory data stores
const memoryStore = {
  users: [],
  services: [
    {
      id: 1,
      name: "Professional Dry Cleaning",
      description: "Expert dry cleaning services"
    }
  ],
  testimonials: [],
  chatMessages: [],
  orders: []
};

export interface IStorage {
  initializeDatabase(): Promise<void>;
  getUser(id: string): Promise<any>;
  getUserByUsername(username: string): Promise<any>;
  getUserByEmail(email: string): Promise<any>;
  createUser(userData: any): Promise<any>;
  getServices(): Promise<any[]>;
  getService(id: number): Promise<any>;
  getTestimonials(): Promise<any[]>;
  getChatMessages(userId: string): Promise<any[]>;
  addChatMessage(message: any): Promise<any>;
  createOrder(orderData: any): Promise<any>;
  getOrdersByUserId(userId: string): Promise<any[]>;
  getOrder(id: number): Promise<any>;
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

  async getUser(id: string): Promise<any> {
    return memoryStore.users.find(u => u.id === id);
  }

  async getUserByUsername(username: string): Promise<any> {
    return memoryStore.users.find(u => u.username === username);
  }

  async getUserByEmail(email: string): Promise<any> {
    return memoryStore.users.find(u => u.email === email);
  }

  async createUser(userData: any): Promise<any> {
    const user = { ...userData, id: Date.now().toString() };
    memoryStore.users.push(user);
    return user;
  }

  async getServices(): Promise<any[]> {
    return memoryStore.services;
  }

  async getService(id: number): Promise<any> {
    return memoryStore.services.find(s => s.id === id);
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

  async createOrder(orderData: any): Promise<any> {
    const order = { ...orderData, id: Date.now() };
    memoryStore.orders.push(order);
    return order;
  }

  async getOrdersByUserId(userId: string): Promise<any[]> {
    return memoryStore.orders.filter(o => o.userId === userId);
  }

  async getOrder(id: number): Promise<any> {
    return memoryStore.orders.find(o => o.id === id);
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
