export default function ShareButton({
  username,
  topTrack,
  topArtist,
}: {
  username: string;
  topTrack: string;
  topArtist: string;
}) {
  const shareUrl = `http://localhost:3000/api/og?username=${encodeURIComponent(username)}&topTrack=${encodeURIComponent(topTrack)}&topArtist=${encodeURIComponent(topArtist)}`;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shareUrl);
    alert("Shareable link copied!");
  };

  return (
    <button
      onClick={copyToClipboard}
      className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2 px-4 rounded-md"
    >
      📤 Share Your K-Pop Stats
    </button>
  );
}
