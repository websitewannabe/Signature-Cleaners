import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().optional(),
});

export const orderSchema = z.object({
  id: z.string(),
  userId: z.string(),
  status: z.enum(['pending', 'processing', 'completed']),
  items: z.array(z.object({
    name: z.string(),
    quantity: z.number(),
  })),
  createdAt: z.date(),
});

export type User = z.infer<typeof userSchema>;
export type Order = z.infer<typeof orderSchema>;