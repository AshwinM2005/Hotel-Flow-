import Searchbar from './Component/Searchbar'
import Room_Type_Card from '../../Components/Room_Type'
import Room_Details from './Component/Room_Details'
import { useEffect, useState } from 'react'


function Rooms() {
  const [rooms , setRooms] = useState([]);
  const [available , setAvailable] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch("http://localhost:3000/room_types" , {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => setRooms(data))
      .catch(err => console.error(err));

    fetch("http://localhost:3000/rooms/available" , {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          if (!res.ok) throw new Error("Failed to fetch available");
          return res.json();
        })
        .then(data => setAvailable(data))

  }, []);
  


  return (
    <div className='flex-1 bg-[#f0e2fe] rounded-2xl p-3'>
        <Searchbar/>
        <div className=' font-bold text-xl pt-2 pb-0 p-1'>
          Room Types :
        </div>

        <div className='flex gap-6 mt-3'>
        <div className=' w-5/7 space-y-4'>
        {rooms.map((room) => {
      const isAvailable =  available[room.type] || 0
      const status =  isAvailable > 0 ? "Available" : "Temporarily Unavailable"
        return (
          <Room_Type_Card
            key={room.id}
            image={`/${room.image}`}
            type={room.type}
            guests={room.capacity}
            description={room.description}
            availabile_room={isAvailable}
            price={room.price}
            status={status}
            size={room.area}
          />
    );
})}
          
        </div>

        <div className=' w-1/2 h-full py-2'>
          <Room_Details/>

        </div>
        </div>
    </div>
  )
}

export default Rooms