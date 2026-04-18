"use client";

import { useAppContext } from "../AppContext";

const ClickBtn = ({ id, type, children }) => {
  const { addEvent } = useAppContext(); 

  const handleClick = () => {
    addEvent({
      friendId: id,
      type,
      date: new Date(),
    });

    console.log("Added:", id, type);
  };

  return (
    <button onClick={handleClick} className="btn">
      {children}
    </button>
  );
};

export default ClickBtn;