import React from 'react';
import Friends from "@/friends.json"
import GetFriends from '@/app/components/getfriends/page';


export default function Friend () {
    return (
     <div className='mt-6'>
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

