import useSpotifyData from "@/pages/hooks/useSpotify";
import { signOut, useSession } from "next-auth/react";
import DetailsGrid from "@/pages/components/DetailsGrid";

export default function SpotifyStats() {
  const { topTracks, topArtists, recentTracks } = useSpotifyData();
  const { data: session } = useSession();

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* User Info Section */}
      {session && (
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-xl">🎵</span>
            <p className="text-sm font-medium">
              Logged in as{" "}
              <span className="font-bold">{session.user.name}</span>
            </p>
          </div>
          &nbsp;
          <button
            onClick={() => signOut()}
            className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2 px-4 rounded-md"
          >
            Logout
          </button>
        </div>
      )}
      {/* Top Tracks */}
      <DetailsGrid title={"🔥 Your Top K-Pop Tracks"}>
        {topTracks.map((track) => (
          <li
            key={track.id}
            className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg"
          >
            <img
              src={track.album.images[0].url}
              alt={track.name}
              width="60"
              className="rounded-md"
            />
            <div>
              <p className="text-sm font-medium">{track.name}</p>
              <p className="text-xs text-gray-400">
                {track.artists.map((a) => a.name).join(", ")}
              </p>
            </div>
          </li>
        ))}
      </DetailsGrid>

      {/* Top Artists */}
      <DetailsGrid title={"🎤 Your Top K-Pop Artists"}>
        {topArtists.map((artist) => (
          <li key={artist.id} className="text-center">
            <img
              src={artist.images[0]?.url}
              alt={artist.name}
              width="60"
              className="rounded-full mx-auto mb-1"
            />
            <p className="text-sm">{artist.name}</p>
          </li>
        ))}
      </DetailsGrid>

      {/* Recently Played */}
      <DetailsGrid title={"⏪ Recently Played K-Pop"}>
        {recentTracks.map((track) => (
          <li
            key={track.id}
            className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg"
          >
            <img
              src={track.album.images[0].url}
              alt={track.name}
              width="60"
              className="rounded-md"
            />
            <div>
              <p className="text-sm font-medium">{track.name}</p>
              <p className="text-xs text-gray-400">
                {track.artists.map((a) => a.name).join(", ")}
              </p>
            </div>
          </li>
        ))}
      </DetailsGrid>
    </div>
  );
}
