import React from 'react'

function Searchbar() {
  return (
    <div className='flex items-center flex-wrap gap-3 p-2 bg-amber-50 rounded-xl mx-2'>
           
           <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 w-64">
                <span className="text-gray-400">🔍</span>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent text-sm outline-none"
                />
            </div> 
            <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
            <option>All Roles</option>
            </select>

            <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
            <option>All Statuses</option>
            </select>

            <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
            <option>All Shifts</option>
            </select>

            <div className="flex-1" />

            <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
            + Add Staff
            </button>
        </div>
  )
}

export default Searchbar