export default function ShareButton({
  username,
  topTrack,
  topArtist,
  albumCover,
}: {
  username: string;
  topTrack: string;
  topArtist: string;
  albumCover: string;
}) {
  const shareUrl = `http://localhost:3000/api/og?username=${encodeURIComponent(username)}&topTrack=${encodeURIComponent(topTrack)}&topArtist=${encodeURIComponent(topArtist)}&albumCover=${encodeURIComponent(albumCover)}`;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shareUrl);
  };

  const downloadImage = async () => {
    const response = await fetch(shareUrl);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${username}-kpop-stats.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button
        onClick={copyToClipboard}
        className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2 px-4 rounded-md"
      >
        📤 Share Your K-Pop Stats
      </button>
      &nbsp;
      <button
        onClick={downloadImage}
        className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2 px-4 rounded-md"
      >
        ⬇️ Download Image
      </button>
    </div>
  );
}
