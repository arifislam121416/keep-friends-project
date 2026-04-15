
import Friends from "./apps/friends/page";
import HeroSection from "./components/herosection/page";
import TottalFriendAdd from "./components/tottalfriendadd/page";

export default function Home() {
  return (
    <div>
      <HeroSection/>
     <TottalFriendAdd/>
     <Friends/>
    </div>
  );
}
