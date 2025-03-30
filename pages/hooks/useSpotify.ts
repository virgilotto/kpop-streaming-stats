import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useSpotifyData() {
  const { data: session } = useSession();
  // @ts-ignore
  const accessToken = session?.accessToken;

  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [recentTracks, setRecentTracks] = useState([]);

  const kpopArtists = [
    "BTS",
    "BLACKPINK",
    "TWICE",
    "SEVENTEEN",
    "EXO",
    "TXT",
    "STRAY KIDS",
    "ITZY",
    "AESPA",
    "IVE",
    "NCT 127",
    "NCT DREAM",
    "RED VELVET",
    "GFRIEND",
    "MAMAMOO",
    "LE SSERAFIM",
    "NEWJEANS",
    "ENHYPEN",
    "SHINEE",
    "BIGBANG",
    "2NE1",
    "GOT7",
    "IKON",
    "MONSTA X",
    "SUPER JUNIOR",
    "VIXX",
    "KISS OF LIFE",
    "MARK",
  ];

  useEffect(() => {
    if (!accessToken) return;

    const fetchSpotifyData = async () => {
      try {
        const [tracksRes, artistsRes, recentRes] = await Promise.all([
          fetch(
            "https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=long_term",
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            },
          ),
          fetch(
            "https://api.spotify.com/v1/me/top/artists?limit=20&time_range=long_term",
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            },
          ),
          fetch(
            "https://api.spotify.com/v1/me/player/recently-played?limit=20",
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            },
          ),
        ]);

        const tracksData = await tracksRes.json();
        const artistsData = await artistsRes.json();
        const recentData = await recentRes.json();

        const kpopArtistsFiltered = artistsData.items.filter(
          (artist: SpotifyArtist) =>
            artist.genres.some((genre) => genre.includes("k-pop")) ||
            kpopArtists.includes(artist.name.toUpperCase()),
        );

        const kpopTracksFiltered = tracksData.items.filter(
          (track: SpotifyTrack) =>
            track.artists.some(
              (artist) =>
                artist.genres?.some((genre) => genre.includes("k-pop")) ||
                kpopArtists.includes(artist.name.toUpperCase()),
            ),
        );

        const kpopRecentTracksFiltered = recentData.items
          .map((item: SpotifyRecentData) => item.track)
          .filter((track: SpotifyTrack) =>
            track.artists.some(
              (artist) =>
                artist.genres?.some((genre) => genre.includes("k-pop")) ||
                kpopArtists.includes(artist.name.toUpperCase()),
            ),
          );

        setTopTracks(kpopArtistsFiltered);
        setTopArtists(kpopTracksFiltered);
        setRecentTracks(kpopRecentTracksFiltered);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };

    fetchSpotifyData();
  }, [accessToken]);

  return { topTracks, topArtists, recentTracks };
}
