import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler(req: { url: string | URL }) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username") || "K-Pop Fan";
  const topTrack = searchParams.get("topTrack") || "Unknown Song";
  const topArtist = searchParams.get("topArtist") || "Unknown Artist";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          backgroundColor: "#1e1e1e",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: "48px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <p>🔥 {username}'s K-Pop Stats</p>
        <p>🎵 Top Track: {topTrack}</p>
        <p>🎤 Top Artist: {topArtist}</p>
      </div>
    ),
  );
}
