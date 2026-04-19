
import Friends from "@/friends.json";
import Image from "next/image";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineTextsms } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineVideocam } from "react-icons/md";
import ClickBtn from "@/app/components/ClickBtn";





export default async function FriendsDetails({ params }) {

  const {id }= await params;

  const friend = Friends.find(
    (f) => String(f.id) === String(id)
  );

  if (!friend) {
    return <h1>Friend not found</h1>;
  }

  const getStatus = (Friend) => {
  const today = new Date();
  const dueDate = new Date(Friend.next_due_date);

  if (today > dueDate) return "overdue";
  if (Friend.days_since_contact >= Friend.goal) return "due";
  return "on-track";
};
 const status = getStatus(friend);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 justify-center bg-[#f8fafcFF]">
<div className="md:col-span-4 space-y-4  items-center text-center mx-auto ">
  <div className="text-center w-65 rounded-2xl mt-2 shadow-[#00000014] space-y-3 p-6 bg-[#ffffffFF] ">
              
  <Image className="rounded-full mx-auto" src={friend.picture} width={80} height={80} alt="Friends Picture"/>
              <h1 className="text-xl font-semibold">{friend.name}</h1>
  
              <div className="flex justify-center gap-2 flex-wrap">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-[#cbfadbFF] text-gray-700 rounded-full"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
               <p>
          Status:{" "}
          <span
            className={`font-bold ${
              status === "overdue"
                ? "bg-red-600 p-1.5 rounded-2xl text-white"
                : status === "due"
                ? "bg-yellow-500 p-1.5 rounded-2xl text-black"
                : "bg-green-500 p-1.5 rounded-2xl text-white"
            }`}
          >
            {status}
          </span>
        </p>
  
       
        <p>{friend.email}</p>
        
          </div>
          <div className="text-center w-65 rounded-2xl   mt-2 shadow-[#00000014] p-4 bg-[#ffffffFF] ">
          <p className="flex gap-4  justify-center items-center"> <RiNotificationSnoozeLine />Snooze 2 weeks</p>
          </div>
             <div className="text-center w-65 rounded-2xl   mt-2 shadow-[#00000014] p-4 bg-[#ffffffFF] ">
          <p className="flex gap-4  justify-center items-center"><FiArchive  />Archive</p>
          </div>
            <div className="text-center w-65 rounded-2xl   mt-2 shadow-[#00000014] p-4 bg-[#ffffffFF] ">
          <p className="flex gap-4  justify-center items-center text-[#EF4444]"><RiDeleteBin5Line />Delete</p>
          </div>
</div>

  <div className="md:col-span-8  items-center text-center mx-auto">
  <div className="lg:flex  gap-4">
   <div className="text-center w-65 rounded-2xl   mt-2 shadow-[#00000014] p-6 bg-[#ffffffFF] ">
  <p className="text-3xl font-semibold text-[#244D3F]">{friend.days_since_contact}</p>
  <p className="text-[#64748bFF] text-xl">Days Since Contact</p>
   </div>
   <div className="text-center w-65 rounded-2xl   mt-2 shadow-[#00000014] p-6 bg-[#ffffffFF] ">
  <p className="text-3xl font-semibold text-[#244D3F]">{friend.goal}</p>
  <p className="text-[#64748bFF] text-xl">Goal(Days)</p>
   </div>
   <div className="text-center w-65 rounded-2xl   mt-2 shadow-[#00000014] p-6 bg-[#ffffffFF] ">
  <p className="text-3xl font-semibold text-[#244D3F]">{friend.next_due_date}</p>
  <p className="text-[#64748bFF] text-xl">Days Since Contact</p>
   </div>
   
  </div>

  <div className="flex text-center w-full rounded-2xl   mt-2 shadow p-6 bg-[#ffffffFF]  justify-between"> 
   <div>
    <p>Relationship Goal</p>
    <p>Connect every <span className="text-xl font-semibold">{friend.days_since_contact} days</span></p>
   </div>
   <button className="btn">Edit</button>
  </div>
 
 <div className=" mt-4 w-full rounded-2xl shadow p-6 bg-[#ffffffFF]">

 <h1 className="text-2xl font-semibold text-left mb-4">Quick Check-In</h1>

  <div className="flex text-center justify-between">

<div className="bg-[#f8fafcFF] w-54 text-center font-semibold  p-8 rounded-2xl">
  <p><BiPhoneCall className="mx-auto text-3xl" /></p>
 <ClickBtn friendId={friend.id} name={friend.name} picture={friend.picture} type="call">
  Call
</ClickBtn>

</div>

<div className="bg-[#f8fafcFF] w-54 text-center font-semibold  p-8 rounded-2xl">
  <p><MdOutlineTextsms className="mx-auto text-3xl" /></p>
<ClickBtn friendId={friend.id} name={friend.name} picture={friend.picture} type="text">
  Text
</ClickBtn>

</div>

<div className="bg-[#f8fafcFF] w-54 text-center font-semibold  p-8 rounded-2xl">
<p><MdOutlineVideocam className="mx-auto text-3xl" /></p>
  
<ClickBtn friendId={friend.id} name={friend.name} picture={friend.picture} type="video">
  Video
</ClickBtn>
  

</div>


  </div>

 </div>
  </div>
</div>
  );
}