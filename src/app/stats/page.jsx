import Friends from "@/friends.json";
import Stats from "./Stats";


export default function Page() {
    
  return (

  <Stats friends={Friends}/>

  );
}
