import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateOgImage({
  title,
  meta,
}: {
  title: string;
  meta: string;
  bgImage: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background:
            "linear-gradient(135deg, #000000 0%, #1a1a1a 40%, #790003 100%)",
        }}
      >
        {/* Logo area */}
        <div
          style={{
            fontSize: "24px",
            color: "#C0C0C0",
            letterSpacing: "4px",
            textTransform: "uppercase" as const,
          }}
        >
          SIGNATURE CLEANERS
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#FFFFFF",
            }}
          >
            {title}
          </div>
        </div>

        {/* Meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              color: "#A3A3A3",
            }}
          >
            {meta}
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "#666666",
            }}
          >
            mysignaturecleaners.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
