import { ImageResponse } from "next/og";

import { profile } from "@/data/content";

export const alt = `${profile.name} — ${profile.title}`;
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
          padding: 80,
          background: "#0a111f",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#a4b8e0", marginBottom: 20 }}>
          {profile.title}
        </div>
        <div style={{ fontSize: 96, fontWeight: 700 }}>{profile.name}</div>
        <div
          style={{
            width: 120,
            height: 6,
            background: "#1f3864",
            marginTop: 36,
            marginBottom: 36,
          }}
        />
        <div style={{ fontSize: 32, color: "#c9d6ee" }}>
          AI-assisted & mobile tools · Rhode Island
        </div>
      </div>
    ),
    size,
  );
}
