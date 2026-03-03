import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const baseScheduleSchema = z.object({
  fullName: z.string().optional(),
  name: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(1),
  address: z.string().min(1),
  serviceType: z.string().optional(),
  pickupDate: z.string().optional(),
  pickupTime: z.string().optional(),
  notes: z.string().optional(),
  message: z.string().optional(),
});

type SchedulePayload = z.infer<typeof baseScheduleSchema>;

const scheduleSchema = baseScheduleSchema.refine(
  (payload: SchedulePayload) => payload.fullName || payload.name,
  {
    message: "Name is required",
  }
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const parsed = scheduleSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid scheduling data",
      errors: parsed.error.errors,
    });
  }

  return res.status(200).json({
    message: "Pickup scheduled successfully",
    confirmationNumber: `SC-${Date.now().toString().slice(-6)}`,
  });
}
