import express, { NextFunction, Response, type Request } from "express";
import { config, validateConfig } from "./config";
import { registerRoutes } from "./routes";
import { storage } from "./storage";
import { log, serveStatic, setupVite } from "./vite";

const app = express();

// Security headers middleware
app.use((req, res, next) => {
  // Content Security Policy
  const isDevelopment = process.env.NODE_ENV !== "production";
  const cspPolicy = isDevelopment
    ? "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://api.mydrycleaner.com https://cdn.equalweb.com https://app.termageddon.com; " +
      "style-src 'self' 'unsafe-inline' https://cdn.equalweb.com; " +
      "img-src 'self' data: https:; " +
      "font-src 'self' data:; " +
      "connect-src 'self' https://api.mydrycleaner.com https://cdn.equalweb.com https://app.termageddon.com ws://localhost:* wss://localhost:* ws://127.0.0.1:* wss://127.0.0.1:* wss: ws:; " +
      "frame-ancestors 'none';"
    : "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://api.mydrycleaner.com https://cdn.equalweb.com https://app.termageddon.com; " +
      "style-src 'self' 'unsafe-inline' https://cdn.equalweb.com; " +
      "img-src 'self' data: https:; " +
      "font-src 'self' data:; " +
      "connect-src 'self' https://api.mydrycleaner.com https://cdn.equalweb.com https://app.termageddon.com wss: ws:; " +
      "frame-ancestors 'none';";

  res.setHeader("Content-Security-Policy", cspPolicy);

  // Additional security headers
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  // HTTPS enforcement in production
  if (
    process.env.NODE_ENV === "production" &&
    req.header("x-forwarded-proto") !== "https"
  ) {
    res.setHeader(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload"
    );
    return res.redirect(301, `https://${req.header("host")}${req.url}`);
  }

  next();
});

app.use(express.json({ limit: "10mb" })); // Add request size limit
app.use(express.urlencoded({ extended: false, limit: "10mb" }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // Initialize database with graceful error handling
  try {
    console.log("🔄 Starting database initialization...");
    await storage.initializeDatabase();
    log("✅ Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    if (error instanceof Error) {
      console.error("Error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });
    }
    console.log("⚠️  Running without database persistence (memory only)");
  }

  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Validate configuration
  validateConfig();

  // Serve the app on configured port
  // this serves both the API and the client.
  const port = config.port;
  server.listen(port, config.host, () => {
    log(`🚀 Server running on http://${config.host}:${port}`);
    if (config.isDevelopment) {
      log(`📖 Frontend: http://${config.host}:${port}`);
      log(`🔌 API: http://${config.host}:${port}/api`);
    }
  });
})();
