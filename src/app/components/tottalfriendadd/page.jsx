

const TottalFriendAdd = ({Friends}) => {
   const getStatus =(friend)=>{
      const today = new Date();
      const dueDate = new Date(friend.next_due_date);
      if(today > dueDate ) return "overdue";
      if(friend.days_since_contact >= friend.goal) return "due";
      return "on-track";
   };
   const totalFriends = Friends.length;
   const onTrack = Friends.filter(f => getStatus(f) === "on-track").length;
   const needAttention = Friends.filter(
  f => getStatus(f) !== "on-track"
).length;
   const thisMonth = Friends.filter(f => {
    const date = new Date(f.next_due_date);
    const today = new Date(); 
      return (
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }).length;
    return (
        <div className='grid text-center bg-[#F8FAFC]  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className="card bg-base-100 p-6 gap-4 card-xs shadow-sm">
  
   <p className='text-[32px] font-semibold'>{totalFriends}</p>
   <p>Friend</p>
  
</div>
          <div className="card  bg-base-100 p-6 shadow-sm">
 
   <p className='text-[32px] font-semibold'>{onTrack}</p>
   <p>On Track</p>
  
</div>
          <div className="card p-6 bg-base-100 card-xs shadow-sm">
  
   <p className='text-[32px] font-semibold'>{needAttention}</p>
   <p>Need Attention</p>
  
</div>
          <div className="card p-6 bg-base-100 card-xs shadow-sm">
  
   <p className='text-[32px] font-semibold'>{thisMonth}</p>
   <p>Interactions This Month</p>
  
</div>
        </div>
    );
};

export default TottalFriendAdd;