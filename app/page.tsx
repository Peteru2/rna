import HomeAbout from "./home/HomeAbout";
import HomeBook from "./home/HomeBook";
import HomeHero from "./home/HomeHero";

export default function Home() {
  return (
      <div >
        <HomeHero />
        <HomeAbout />
        <HomeBook />
       </div>
  );
}
