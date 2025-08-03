import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema for SQLite
export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  address: text("address"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  fullName: true,
  email: true,
  phone: true,
  address: true,
});

// Order schema for SQLite
export const orders = sqliteTable("orders", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull(),
  status: text("status").notNull(),
  serviceType: text("service_type").notNull(),
  pickupDate: text("pickup_date").notNull(),
  pickupTime: text("pickup_time").notNull(),
  deliveryDate: text("delivery_date"),
  deliveryTime: text("delivery_time"),
  notes: text("notes"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP").notNull(),
});

export const insertOrderSchema = createInsertSchema(orders).pick({
  userId: true,
  status: true,
  serviceType: true,
  pickupDate: true,
  pickupTime: true,
  deliveryDate: true,
  deliveryTime: true,
  notes: true,
});

// Contact schema for SQLite
export const contacts = sqliteTable("contacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP").notNull(),
  resolved: integer("resolved", { mode: "boolean" }).default(false),
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

// Service schema for SQLite
export const services = sqliteTable("services", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull(),
  imageUrl: text("image_url"),
});

// Testimonial schema for SQLite
export const testimonials = sqliteTable("testimonials", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  role: text("role"),
  content: text("content").notNull(),
  rating: integer("rating").notNull(),
});

// Chat message schema for SQLite
export const chatMessages = sqliteTable("chat_messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id"),
  content: text("content").notNull(),
  isAgent: integer("is_agent", { mode: "boolean" }).default(false),
  timestamp: text("timestamp").default("CURRENT_TIMESTAMP").notNull(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof orders.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type Service = typeof services.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type ChatMessage = typeof chatMessages.$inferSelect;
