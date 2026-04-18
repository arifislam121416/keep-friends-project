"use client";

import { useAppContext } from "../AppContext";

export default function Timeline() {
  const { events } = useAppContext();

  return (
    <div className=" bg-amber-200">
      <h1 className="text-3xl">Timeline</h1>
      {events.map((e, i) => (
        <p  key={i}>
          {e.friendId} - {e.type}
        </p>
      ))}
    </div>
  );
}