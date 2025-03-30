import SpotifyLogin from "@/pages/components/Login";
import { useSession } from "next-auth/react";
import SpotifyStats from "@/pages/components/SpotifyStats";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="bg-gray-200 text-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <SpotifyLogin />
      {session && <SpotifyStats />}
    </div>
  );
}
