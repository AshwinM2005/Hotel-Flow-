import React from 'react'
import Staff_Card from './Staff_Card';


function Staff_Lists() {
  return (
    <div className="overflow-y-auto no-scrollbar h-100 rounded-xl bg-white shadow-sm m-3">
      
      {/* Table */}
      <table className="w-full border-collapse text-sm">
        
        {/* Header */}
        <thead className="bg-gray-50 text-gray-600 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Name</th>
            <th className="px-4 py-3 text-left font-medium">Role</th>
            <th className="px-4 py-3 text-left font-medium">Shift</th>
            <th className="px-4 py-3 text-left font-medium">Status</th>
            <th className="px-4 py-3 text-left font-medium">Actions</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className="divide-y divide-gray-100 ">
          


          {/* Duplicate rows for layout */}
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>
          <Staff_Card/>


        </tbody>
      </table>
    </div>
  );
}

export default Staff_Lists;
