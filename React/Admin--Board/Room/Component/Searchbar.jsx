import React from 'react'

function Searchbar() {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-2 shadow-sm">
      
      {/* Search */}
      <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 w-72">
        <span className="text-gray-400">🔍</span>
        <input
          type="text"
          placeholder="Search room type, number, etc"
          className="w-full bg-transparent text-sm outline-none text-gray-700"
        />
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>Sort by:</span>
        <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
          <option>Popular</option>
          <option>Price</option>
          <option>Availability</option>
        </select>
      </div>

      {/* Filter */}
      <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
        <option>All Type</option>
        <option>Single</option>
        <option>Deluxe</option>
        <option>Suite</option>
      </select>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add Room */}
      <button className="rounded-lg bg-lime-400 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-lime-500">
        Add Room
      </button>

    </div>
  )
}

export default Searchbar