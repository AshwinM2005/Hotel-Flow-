import React from 'react'

function Quick_box() {
  return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 m-2 rounded-2xl">
      
      {/* Total Staff */}
      <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm h-17">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600">
          👥
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Staff</p>
          <p className="text-xl font-semibold text-gray-800">58</p>
        </div>
      </div>

      {/* Active */}
      <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm h-17">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
          ✔️
        </div>
        <div>
          <p className="text-sm text-gray-500">Active</p>
          <p className="text-xl font-semibold text-gray-800">45</p>
        </div>
      </div>

      {/* On Leave */}
      <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm h-17">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
          🏖️
        </div>
        <div>
          <p className="text-sm text-gray-500">On Leave</p>
          <p className="text-xl font-semibold text-gray-800">8</p>
        </div>
      </div>

      {/* Disabled */}
      <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm h-17">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-100 text-lime-600">
          ⛔
        </div>
        <div>
          <p className="text-sm text-gray-500">Disabled</p>
          <p className="text-xl font-semibold text-gray-800">5</p>
        </div>
      </div>

    </div>
  )
}

export default Quick_box