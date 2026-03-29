import { generateOgImage, size, contentType } from "@/lib/og/og-template";
import { ogConfig } from "@/lib/og/og-config";

export const runtime = "nodejs";
export const dynamic = "force-static";
export { size, contentType };

export default async function OgImage() {
  return generateOgImage(ogConfig["alteration-tailoring"]);
}
