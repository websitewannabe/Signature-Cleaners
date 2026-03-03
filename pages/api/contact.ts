import { randomBytes } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const parsed = contactSchema.parse(req.body);
    const { name, email, phone, address, message } = parsed;
    const subject = parsed.subject ?? "Contact Form Submission";
    const [firstName, ...lastNameParts] = name.trim().split(" ");
    const lastName = lastNameParts.join(" ");
    const noteExtras = [
      phone ? `Phone: ${phone}` : null,
      address ? `Address: ${address}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const password = randomBytes(16).toString("hex");

    const tokenResponse = await fetch("https://api.mydrycleaner.com/q", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        RequestType: "GetToken",
        AccountKey: process.env.ACCOUNT_KEY,
        SecurityID: process.env.SECURITY_ID,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error("Failed to get token");
    }

    const tokenData = await tokenResponse.json();

    const signupResponse = await fetch("https://api.mydrycleaner.com/q", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        RequestType: "Signup",
        AccountKey: process.env.ACCOUNT_KEY,
        SessionID: tokenData.ReturnObject.SessionID,
        Parameters: {
          AccountNodeID: process.env.SECURITY_ID,
          Firstname: firstName,
          Lastname: lastName || "",
          EmailAddress: email,
          Password: password,
          ClientAccountID: "",
          ServiceType: "RETAIL",
          Notes: `${subject}\n\n${message}${noteExtras ? `\n\n${noteExtras}` : ""}`,
        },
      }),
    });

    if (!signupResponse.ok) {
      console.error("External API request failed:", {
        status: signupResponse.status,
        endpoint: "mydrycleaner.com/q",
      });
      throw new Error("Failed to process contact form submission");
    }

    const data = await signupResponse.json();
    return res.status(201).json(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ message: "Invalid input data", errors: error.errors });
    }

    console.error(
      "Error submitting contact form:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return res.status(500).json({
      message: "Error submitting contact form. Please try again later.",
    });
  }
}
