import React from 'react';
import MynavLink from '../mynavlink/page';
import { IoMdHome } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { FaChartBar } from "react-icons/fa";

const Navbar = () => {

const items = [
    {
        path:"/",
        text:"Home",
        icon:<IoMdHome />
    },
 {
        path:"/timeline",
        text:"Timeline",
        icon:<IoMdTime />
    },
    {
        path:"/Stats",
        text:"Stats",
        icon:<FaChartBar />
    },
   
]

    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <p className='text-2xl font-bold'>Keen<span className='text-[#244D3F]'>Keeper</span></p>
  </div>
<div className='flex lg:space-x-3 md:space-x-3'>
{
    items.map((item)=> (<MynavLink key={item.path} href={item.path}>
        <span className='flex text-[16px] items-center gap-0.5 lg:gap-2 md:gap-2'>{item.icon} {item.text}</span>
        </MynavLink>))
}
</div>
</div>
    );
};

export default Navbar;