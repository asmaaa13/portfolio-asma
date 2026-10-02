import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Image d'aperçu générée automatiquement pour LinkedIn, Slack, X…
// Runtime Edge : évite un bug de next/og avec le runtime Node sous Windows.
export const runtime = "edge";
export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f5c55 0%, #12201f 100%)",
          color: "#fbfaf7",
        }}
      >
        <div style={{ fontSize: 30, color: "#e8b48f", marginBottom: 24 }}>Portfolio</div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>{site.name}</div>
        <div style={{ fontSize: 52, marginTop: 12 }}>{site.role}</div>
        <div style={{ fontSize: 30, marginTop: 40, opacity: 0.8 }}>React · Next.js · Strapi · API REST · SEO</div>
      </div>
    ),
    size
  );
}
