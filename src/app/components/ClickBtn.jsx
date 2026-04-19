"use client";

import { toast } from "react-toastify";
import { useAppContext } from "../AppContext";

const ClickBtn = ({ type, name, picture, friendId, children }) => {
  const { addEvent } = useAppContext();
 
  const handleClick = () => {
    addEvent({
      friendId,
      type,
      name,
      picture,
      date: new Date().toISOString(),
    });
    toast.success("Added to timeline!");
  };

  return (
    <button onClick={handleClick} className="btn">
      {children}
    </button>
  );
};

export default ClickBtn;