import { randomBytes } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, address, message } = body;
    const subject = body.subject ?? "Contact Form Submission";

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const [firstName, ...lastNameParts] = name.trim().split(" ");
    const lastName = lastNameParts.join(" ");
    const noteExtras = [
      phone ? `Phone: ${phone}` : null,
      address ? `Address: ${address}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const password = randomBytes(16).toString("hex");

    // Get API token from MyDryCleaner
    const tokenResponse = await fetch("https://api.mydrycleaner.com/q", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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

    // Create customer signup in MyDryCleaner system
    const signupResponse = await fetch("https://api.mydrycleaner.com/q", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error(
      "Error submitting contact form:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { message: "Error submitting contact form. Please try again later." },
      { status: 500 }
    );
  }
}
