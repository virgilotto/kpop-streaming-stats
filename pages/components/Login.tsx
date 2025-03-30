import { signIn, signOut, useSession } from "next-auth/react";

export default function SpotifyLogin() {
  const { data: session } = useSession();

  return (
    <div>
      {!session && (
        <button
          onClick={() => signIn("spotify")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Login with Spotify
        </button>
      )}
    </div>
  );
}
