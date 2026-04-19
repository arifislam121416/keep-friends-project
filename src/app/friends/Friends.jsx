
import Friends from "@/friends.json"
import GetFriends from '@/app/components/getfriends/GetFriend';
import TottalFriendAdd from '@/app/components/tottalfriendadd/TottalFriendAdd';



export default function Friend () {
    return (
     <div className='mt-6'>
<TottalFriendAdd Friends={Friends}/>

        <h1 className='text-5xl mt-4 mb-4 font-bold'>Your Friends</h1>
           <div className='grid items-center justify-center space-y-6 bg-[#f8fafcFF] lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
            
            {
        Friends.map((Friend) => (<GetFriends key={Friend.id} Friend={Friend}/>
            
        ))
            }
        </div>
     </div>
    );
};

