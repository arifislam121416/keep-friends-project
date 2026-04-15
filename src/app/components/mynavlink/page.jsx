"use client";
import Link from "next/link";



const MynavLink = ({href,children}) => {

    return (
        
            <Link  href={href}>{children}</Link>
          
    );
};

export default MynavLink;