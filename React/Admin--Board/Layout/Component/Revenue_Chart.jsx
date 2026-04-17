import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../layout.css";

const getLastSixMonths = () => {
  const data = [];
  const currentDate = new Date();
  
  for (let i = 5; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const month = date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    data.push({
      month,
      revenue: Math.floor(Math.random() * (360000 - 200000 + 1)) + 200000,
    });
  }
  
  return data;
};

const data = getLastSixMonths();

function Revenue_Chart() {
  return (
    <div className="revenue-card">
      {/* Header */}
      <div className="revenue-header">
        <h3>Revenue</h3>
        <span className="revenue-filter">Last 6 Months</span>
      </div>

      {/* Chart */}
      <div className="revenue-chart">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `₹${v / 1000}K`}
            />
            <Tooltip
              formatter={(value) => `₹${value.toLocaleString()}`}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#a3e635"
              fill="rgba(163, 230, 53, 0.25)"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Highlight */}
      <div className="revenue-highlight">
        <span>Total Revenue</span>
        <strong>₹315,060</strong>
      </div>
    </div>
  );
}

export default Revenue_Chart;
