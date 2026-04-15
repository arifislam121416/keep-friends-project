import React from 'react';
import MynavLink from '../mynavlink/page';
import { IoMdHome } from "react-icons/io";

const Navbar = () => {

const items = [
    {
        path:"/",
        text:"Home",
    },
 {
        path:"/timeline",
        text:"Timeline",
    },
    {
        path:"/stats",
        text:"Stats",
    },
   
]

    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <p className='text-4xl font-bold'>Keen<span className='text-[#244D3F]'>Keeper</span></p>
  </div>
<div className='space-x-3'>
{
    items.map((item)=> (<MynavLink key={item.path} href={item.path}>{item.text}</MynavLink>))
}
</div>
</div>
    );
};

export default Navbar;