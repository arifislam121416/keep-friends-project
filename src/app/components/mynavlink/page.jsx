"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";



const MynavLink = ({href,children}) => {
     const pathname = usePathname();
     const isActive = pathname === href;

    return (
        
    <Link  href={href} className={`lg:px-3 px-2   py-3 rounded-lg flex items-center lg:gap-2 md:gap-2 sm:gap-0.5 transition
    ${isActive ? "bg-[#244D3F] text-white" : "hover:bg-gray-200"}`}>
        {children}
        </Link>
          
    );
};

export default MynavLink;