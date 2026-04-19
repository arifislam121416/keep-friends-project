
"use client";

import { Pie, PieChart, ResponsiveContainer } from "recharts";

const Stats = ({ friends }) => {

  const data = [
    {
      name: "Overdue",
      value: friends.filter(f => f.status === "overdue").length,
    },
    {
      name: "Due",
      value: friends.filter(f => f.status === "due").length,
    },
    {
      name: "On Track",
      value: friends.filter(f => f.status === "on-track").length,
    },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="60%"
            outerRadius="90%"
            paddingAngle={5}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;