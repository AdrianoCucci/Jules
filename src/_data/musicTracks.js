const musicTracks = [
  {
    title: "Don't Wanna Be",
    coverImageSrc: "assets/images/album-covers/dont-wanna-be.jpg",
    embedLink: "https://open.spotify.com/embed/track/4PjA8d9XMZvyvlK4gf1amF",
  },
  {
    title: "This Love",
    coverImageSrc: "assets/images/album-covers/this-love.jpg",
    embedLink: "https://open.spotify.com/embed/track/0ecJ4ZHSx1EbtyrTuxeF3v",
  },
  {
    title: "All Night Long",
    coverImageSrc: "assets/images/album-covers/all-night-long.jpg",
    embedLink: "https://open.spotify.com/embed/track/6PogkqYpaWV2bW1pVRNs8s",
  },
  {
    title: "Famous Ex",
    coverImageSrc: "assets/images/album-covers/famous-ex.jpg",
    embedLink: "https://open.spotify.com/embed/track/46u7KCl5A0TQpV5d12VPU2",
  },
  {
    title: "I'mPerfect - Jules & F.Y.D.I",
    coverImageSrc: "assets/images/album-covers/im-perfect.jpg",
    externalLink: "https://open.spotify.com/album/5PJ0uz366sIaxYQPQ185zS",
    isLatestRelease: true,
  },
];

export default function () {
  return {
    all: musicTracks,
    latest: musicTracks.find((track) => track.isLatestRelease),
    nonLatest: musicTracks.filter((track) => !track.isLatestRelease),
  };
}
