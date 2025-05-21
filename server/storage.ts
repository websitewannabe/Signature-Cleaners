import session from "express-session";
import MemoryStore from "memorystore";

const ONE_DAY = 1000 * 60 * 60 * 24;
const MemoryStoreSession = MemoryStore(session);

// In-memory data stores
const memoryStore = {
  services: [],
  testimonials: [],
  chatMessages: [],
  orders: []
};

export interface IStorage {
  initializeDatabase(): Promise<void>;
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
    // Initialize with some sample data
    memoryStore.services = [
      {
        id: 1,
        name: "Professional Dry Cleaning",
        description: "Expert dry cleaning services"
      }
    ];
    memoryStore.testimonials = [];
    return Promise.resolve();
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
}

export const storage = new Storage();