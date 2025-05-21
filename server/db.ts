
import { User, Order } from '@shared/schema';

class InMemoryDB {
  private users: User[] = [];
  private orders: Order[] = [];

  async findUser(id: string): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  async createUser(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findOrder(id: string): Promise<Order | undefined> {
    return this.orders.find(o => o.id === id);
  }

  async createOrder(order: Order): Promise<Order> {
    this.orders.push(order);
    return order;
  }

  async findOrdersByUser(userId: string): Promise<Order[]> {
    return this.orders.filter(o => o.userId === userId);
  }
}

export const db = new InMemoryDB();
