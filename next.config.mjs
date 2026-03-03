import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-helmet-async": path.resolve(
        __dirname,
        "client/src/lib/helmet-next.tsx"
      ),
    };
    return config;
  },
  turbopack: {
    root: __dirname,
    resolveAlias: {
      "react-helmet-async": path.resolve(
        __dirname,
        "client/src/lib/helmet-next.tsx"
      ),
    },
  },
};

export default nextConfig;
