import React from 'react'
import Staff_Card from './Staff_Card';
import  { useEffect, useState } from 'react';



function Staff_Lists() {

   const [staff, setStaff] = useState([]);

  const fetchStaff = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:3000/admin/staff", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();
      setStaff(data);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);


  return (
    <div className=" rounded-2xl bg-white shadow-sm mx-6">
      
      {/* Table */}
      <table className="w-full border-collapse text-sm ">
        
        {/* Header */}
        <thead className="bg-gray-50 text-gray-600 sticky top-0 z-10 ">
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
          

          {staff.map((member) => (
            <Staff_Card key={member.id} member={member} />
          ))}


        </tbody>
      </table>
    </div>
  );
}

export default Staff_Lists;
