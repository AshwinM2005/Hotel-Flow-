import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Direct Booking", value: 59 },
  { name: "Booking.com", value: 12 },
  { name: "Agoda", value: 11 },
  { name: "Airbnb", value: 9 },
  { name: "Hotels.com", value: 6 },
  { name: "Others", value: 3 },
];

const COLORS = [
  "#CFF5E7",
  "#A0E4CB",
  "#C9E265",
  "#EAF7A5",
  "#E0F2CC",
  "#F1F8E9",
];

export default function Booking_Platform() {
  return (
    <div className="w-83.75 rounded-2xl bg-white p-5 shadow-sm my-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-l font-semibold text-gray-800">
          Booking by Platform
        </h3>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-33 w-32.5">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={40}
                outerRadius={65}
                paddingAngle={1}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col gap-1 text-[13px] font-semibold">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-gray-800 p-0.5 hover:underline underline-offset-4">
                {item.value}%  - {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
