"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";



const MynavLink = ({href,children}) => {
     const pathname = usePathname();
     const isActive = pathname === href;

    return (
        
    <Link  href={href} className={`px-3 py-2 rounded-lg flex items-center gap-2 transition
    ${isActive ? "bg-[#244D3F] text-white" : "hover:bg-gray-200"}`}>
        {children}
        </Link>
          
    );
};

export default MynavLink;