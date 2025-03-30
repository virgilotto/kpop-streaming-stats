type SpotifyArtist = {
  genres: any[];
  name: string;
  id: string;
  images: any;
};

type SpotifyTrack = {
  artists: SpotifyArtist[];
  id: string;
  album: any;
  name: string;
};

type SpotifyRecentData = { track: any };
