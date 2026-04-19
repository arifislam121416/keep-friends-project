"use client";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useAppContext } from "../AppContext";

const StatsPage = () => {
    const {events = []} = useAppContext();
  const data = [
    { name: "Text",
     value: events.filter((e)=> e.type === "text").length, fill: "#0088FE" },
    { name: "Call", 
    value: events.filter((e)=> e.type === "call").length, fill: "#00C49F" },
    { name: "Video",
    value: events.filter((e) => e.type === "video").length, fill: "#FFBB28" },
   
  ];

  return (
   <div className="bg-[#f8fafcFF] mt-4 p-4 justify-center ">
    <h1 className="text-5xl font-bold my-6">Friendship Analytics</h1>
     <div className=" mb-10 rounded-2xl p-6 bg-[#ffffffFF] ">
       <h3 className="text-[#244d3fFF] text-xl font-semibold">By Interaction Type</h3>
      <ResponsiveContainer width="80%" height={400}>
        <PieChart>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            paddingAngle={5}
            dataKey="value"
            nameKey="name"
            isAnimationActive={true}
          />
          <Legend verticalAlign="bottom" height={36} />
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
     
    </div>
   </div>
  );
};

export default StatsPage;