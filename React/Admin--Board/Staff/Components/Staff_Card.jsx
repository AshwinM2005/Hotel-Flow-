import React from 'react'

function Staff_Card() {
  return (
    <tr className="hover:bg-gray-50">
            <td className="px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200" />
                <span className="font-medium text-gray-800">Alice Smith</span>
              </div>
            </td>
            <td className="px-4 py-3 text-gray-600">Receptionist</td>
            <td className="px-4 py-3 text-gray-600">Afternoon</td>
            <td className="px-4 py-3">
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                On Leave
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