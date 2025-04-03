import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler(req: { url: string | URL }) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username") || "K-Pop Fan";
  const topTrack = searchParams.get("topTrack") || "Unknown Song";
  const topArtist = searchParams.get("topArtist") || "Unknown Artist";
  const albumCover =
    searchParams.get("albumCover") ||
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb777e7a-7d3c-487e-865a-fc83920564a1/d7kpm65-437b2b46-06cd-4a86-9041-cc8c3737c6f0.jpg/v1/fill/w_800,h_800,q_75,strp/no_album_art__no_cover___placeholder_picture_by_cmdrobot_d7kpm65-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvZWI3NzdlN2EtN2QzYy00ODdlLTg2NWEtZmM4MzkyMDU2NGExXC9kN2twbTY1LTQzN2IyYjQ2LTA2Y2QtNGE4Ni05MDQxLWNjOGMzNzM3YzZmMC5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8yjX5CrFjxVH06LB59TpJLu6doZb0wz8fGQq4tM64mg";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
          color: "#fff",
          alignItems: "center",
          justifyContent: "space-around",
          fontFamily: "Noto Sans KR, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={albumCover}
            width={300}
            height={300}
            style={{ borderRadius: "20px" }}
          />
          <p style={{ fontSize: "40px", marginTop: "20px" }}>{topTrack}</p>
          <p style={{ fontSize: "30px", color: "#fffb" }}>{topArtist}</p>
        </div>
        <p style={{ fontSize: "50px", fontWeight: "bold" }}>
          🔥 {username}'s K-Pop Stats
        </p>
      </div>
    ),
  );
}
