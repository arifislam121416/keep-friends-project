// 
import Friends from "@/friends.json";
import Image from "next/image";

export default async function FriendsDetails({ params }) {
  const { id } = await params;

  const friend = Friends.find(
    (f) => String(f.id) === String(id)
  );

  if (!friend) {
    return <h1>Friend not found</h1>;
  }

  return (
    <div>
        <Image className="rounded-full mx-auto" src={friend.picture} width={80} height={80} alt="Friends Picture"/>
      <h2>{friend.name}</h2>
      <p>{friend.email}</p>
    </div>
  );
}