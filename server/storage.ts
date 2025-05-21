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

// In-memory storage
const memoryStore = {
  users: new Map<number, User>(),
  orders: new Map<number, Order>(),
  contacts: new Map<number, Contact>(),
  services: new Map<number, Service>([
    [1, {
      id: 1,
      name: "Professional Dry Cleaning",
      description: "Expert dry cleaning services for all your garments",
      price: "From $8.99 per item",
      imageUrl: "/images/interior.webp"
    }]
  ]),
  testimonials: new Map<number, Testimonial>(),
  chatMessages: new Map<number, ChatMessage>(),
  nextId: 1
};

// Storage interface
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, user: Partial<InsertUser>): Promise<User | undefined>;
  getOrder(id: number): Promise<Order | undefined>;
  getOrdersByUserId(userId: number): Promise<Order[]>;
  createOrder(order: InsertOrder): Promise<Order>;
  updateOrder(id: number, order: Partial<InsertOrder>): Promise<Order | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  getTestimonials(): Promise<Testimonial[]>;
  getChatMessages(userId: number): Promise<ChatMessage[]>;
  addChatMessage(message: Omit<ChatMessage, "id">): Promise<ChatMessage>;
  sessionStore: any;
  initializeDatabase(): Promise<void>;
}

// Memory storage implementation
export class DatabaseStorage implements IStorage {
  sessionStore: any;

  constructor() {
    this.sessionStore = new Map();
  }

  async initializeDatabase(): Promise<void> {
    return Promise.resolve();
  }

  async getUser(id: number): Promise<User | undefined> {
    return memoryStore.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(memoryStore.users.values()).find(u => u.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(memoryStore.users.values()).find(u => u.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = memoryStore.nextId++;
    const user = { id, ...insertUser } as User;
    memoryStore.users.set(id, user);
    return user;
  }

  async updateUser(id: number, userData: Partial<InsertUser>): Promise<User | undefined> {
    const user = memoryStore.users.get(id);
    if (!user) return undefined;
    const updatedUser = { ...user, ...userData };
    memoryStore.users.set(id, updatedUser);
    return updatedUser;
  }

  async getOrder(id: number): Promise<Order | undefined> {
    return memoryStore.orders.get(id);
  }

  async getOrdersByUserId(userId: number): Promise<Order[]> {
    return Array.from(memoryStore.orders.values())
      .filter(order => order.userId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = memoryStore.nextId++;
    const order = { id, ...insertOrder } as Order;
    memoryStore.orders.set(id, order);
    return order;
  }

  async updateOrder(id: number, orderData: Partial<InsertOrder>): Promise<Order | undefined> {
    const order = memoryStore.orders.get(id);
    if (!order) return undefined;
    const updatedOrder = { ...order, ...orderData };
    memoryStore.orders.set(id, updatedOrder);
    return updatedOrder;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = memoryStore.nextId++;
    const contact = { id, ...insertContact } as Contact;
    memoryStore.contacts.set(id, contact);
    return contact;
  }

  async getServices(): Promise<Service[]> {
    return Array.from(memoryStore.services.values());
  }

  async getService(id: number): Promise<Service | undefined> {
    return memoryStore.services.get(id);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(memoryStore.testimonials.values());
  }

  async getChatMessages(userId: number): Promise<ChatMessage[]> {
    return Array.from(memoryStore.chatMessages.values())
      .filter(msg => msg.userId === userId)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }

  async addChatMessage(message: Omit<ChatMessage, "id">): Promise<ChatMessage> {
    const id = memoryStore.nextId++;
    const chatMessage = { id, ...message } as ChatMessage;
    memoryStore.chatMessages.set(id, chatMessage);
    return chatMessage;
  }
}

export const storage = new DatabaseStorage();