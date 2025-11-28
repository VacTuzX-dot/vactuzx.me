import Teach from "../components/global/skills";
import About from "../components/global/about";
import SpotifyCard from "../components/global/spotifyCard";
import VscCard from "../components/global/vscCard";
import GithubCard from "../components/global/repositories";

export default function Home() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <About />
      <SpotifyCard />
      <VscCard />
      <GithubCard />
      <Teach />
    </div>
  );
}
