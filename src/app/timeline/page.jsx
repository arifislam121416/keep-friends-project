"use client";

import Image from "next/image";
import { useAppContext } from "../AppContext";





export default function Timeline() {
 const { events = [] } = useAppContext();


  return (
    <div className="bg-[#f8fafcFF] p-4">
      <h1 className="text-3xl mb-4">Timeline</h1>

      <div className=" space-y-4">
        {events.map((e, i) => (
          <div key={i} className="flex gap-4 items-center p-3 bg-[#ffffffFF] rounded-lg">

            <Image
              src={e.picture ?? "/default-avatar.png"}
              width={50}
              height={50}
              alt={e.name || "event"}
              className="rounded-full"
            />

            <div>
             <div className="flex gap-3 items-center">
               <p className=" text-xl font-bold text-[#244d3fFF]">{e.type} </p>
              <p className="text-[#64748bFF]">with {e.name}</p>
             </div>
              <p className="text-sm text-gray-500">
                {e.date ? new Date(e.date).toLocaleString() : "No date"}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}