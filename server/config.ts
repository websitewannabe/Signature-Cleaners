// Configuration with environment variable fallbacks
export const config = {
  // Server configuration
  port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
  host: process.env.HOST || "127.0.0.1", // Force IPv4 to avoid IPv6 binding issues
  nodeEnv: process.env.NODE_ENV || "development",

  // Database configuration
  databaseUrl: process.env.DATABASE_URL || null,

  // Session configuration
  sessionSecret:
    process.env.SESSION_SECRET || "dev-session-secret-change-in-production",

  // External services (optional)
  sendgridApiKey: process.env.SENDGRID_API_KEY || null,
  accountKey: process.env.ACCOUNT_KEY || null,
  securityId: process.env.SECURITY_ID || null,

  // Feature flags
  enableDatabase: process.env.ENABLE_DATABASE !== "false",
  enableAuth: process.env.ENABLE_AUTH !== "false",

  // Development helpers
  isDevelopment: process.env.NODE_ENV !== "production",
  isProduction: process.env.NODE_ENV === "production",
} as const;

// Validation for production
export function validateConfig() {
  if (config.isProduction) {
    const requiredInProduction = [
      { key: "DATABASE_URL", value: config.databaseUrl },
      { key: "SESSION_SECRET", value: config.sessionSecret },
    ];

    const missing = requiredInProduction.filter(({ value }) => !value);

    if (missing.length > 0) {
      const missingKeys = missing.map(({ key }) => key).join(", ");
      throw new Error(
        `Missing required environment variables in production: ${missingKeys}`
      );
    }

    if (config.sessionSecret === "dev-session-secret-change-in-production") {
      throw new Error("SESSION_SECRET must be changed in production");
    }
  }

  return config;
}
