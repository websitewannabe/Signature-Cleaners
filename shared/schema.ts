
import { z } from 'zod';

// Zod schemas for validation
export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  username: z.string(),
  name: z.string().optional(),
  createdAt: z.date()
});

export const orderSchema = z.object({
  id: z.string(),
  userId: z.string(),
  status: z.enum(['pending', 'processing', 'completed']),
  items: z.array(z.object({
    name: z.string(),
    quantity: z.number()
  })),
  createdAt: z.date()
});

// TypeScript types
export type User = z.infer<typeof userSchema>;
export type Order = z.infer<typeof orderSchema>;
