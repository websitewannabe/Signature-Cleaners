import * as schema from "@shared/schema";
import * as sqliteSchema from "@shared/sqlite-schema";
import Database from "better-sqlite3";
import { drizzle as drizzleSqlite } from "drizzle-orm/better-sqlite3";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Database configuration with fallbacks
const isDevelopment = process.env.NODE_ENV !== "production";
const databaseUrl = process.env.DATABASE_URL;

let db: any;
let isUsingPostgres = false;

if (databaseUrl) {
  // Use PostgreSQL if DATABASE_URL is provided
  console.log("🗃️  Using PostgreSQL database");
  const client = postgres(databaseUrl);
  db = drizzle(client, { schema });
  isUsingPostgres = true;
} else if (isDevelopment) {
  // Use SQLite for development
  console.log("🗃️  Using SQLite database for development");
  const sqlite = new Database(":memory:"); // In-memory database for development
  db = drizzleSqlite(sqlite, { schema: sqliteSchema });
  isUsingPostgres = false;
} else {
  throw new Error(
    "DATABASE_URL environment variable is required in production"
  );
}

export { db, isUsingPostgres };
