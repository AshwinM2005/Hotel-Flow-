import React from 'react'

function Staff_Card({member}) {
  const statusStyles = {
  active: "bg-green-100 text-green-700",
  on_leave: "bg-yellow-100 text-yellow-700",
  disabled: "bg-red-100 text-red-700"
};

  return (
    <tr className="hover:bg-gray-50">
            <td className="px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200" />
                <span className="font-medium text-gray-800">{member.name}</span>
              </div>
            </td>
            <td className="px-4 py-3 text-gray-600">{member.role}</td>
            <td className="px-4 py-3 text-gray-600">{member.shift}</td>
            <td className="px-4 py-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  statusStyles[member.status] || "bg-gray-100 text-gray-700"
                }`}
              >
                {member.status}
            </span>
            </td>
            <td className="px-4 py-3">
              <button className="rounded-md border px-3 py-1 text-xs text-gray-600 hover:bg-gray-100">
                View ▾
              </button>
            </td>
          </tr>
  )
}

export default Staff_Card