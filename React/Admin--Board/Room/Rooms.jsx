import React from 'react'
import Searchbar from './Component/Searchbar'
import Room_Type_Card from '../../Components/Room_Type'
import Room_Details from './Component/Room_Details'

function Rooms() {
  return (
    <div className='flex-1 bg-[#f0e2fe] rounded-2xl p-3'>
        <Searchbar/>
        <div className=' font-bold text-xl pt-2 pb-0 p-1'>
          Room Types :
        </div>

        <div className='flex gap-6 mt-3'>
        <div className=' w-5/7 space-y-4'>
          <Room_Type_Card
          image="Images/user_interface/pexels-heyho-6523283.jpg"
          name="Deluxe"
          size="35 m²"
          bed="King Bed"
          guests={2}
          description="More space and luxury with separate seating."
          availabile_room="18"
          total_room="25"
          price={150}
          status="Available"
        />
          <Room_Type_Card
          image="Images/user_interface/pexels-heyho-6523283.jpg"
          name="Deluxe"
          size="35 m²"
          bed="King Bed"
          guests={2}
          description="More space and luxury with separate seating."
          availabile_room="18"
          total_room="25"
          price={150}
          status="Available"
        />
          <Room_Type_Card
          image="Images/user_interface/pexels-heyho-6523283.jpg"
          name="Deluxe"
          size="35 m²"
          bed="King Bed"
          guests={2}
          description="More space and luxury with separate seating."
          availabile_room="18"
          total_room="25"
          price={150}
          status="Available"
        />
          <Room_Type_Card
          image="Images/user_interface/pexels-heyho-6523283.jpg"
          name="Deluxe"
          size="35 m²"
          bed="King Bed"
          guests={2}
          description="More space and luxury with separate seating."
          availabile_room="18"
          total_room="25"
          price={150}
          status="Available"
        />
          <Room_Type_Card
          image="Images/user_interface/pexels-heyho-6523283.jpg"
          name="Deluxe"
          size="35 m²"
          bed="King Bed"
          guests={2}
          description="More space and luxury with separate seating."
          availabile_room="18"
          total_room="25"
          price={150}
          status="Available"
        />
          <Room_Type_Card
          image="Images/user_interface/pexels-heyho-6523283.jpg"
          name="Deluxe"
          size="35 m²"
          bed="King Bed"
          guests={2}
          description="More space and luxury with separate seating."
          availabile_room="18"
          total_room="25"
          price={150}
          status="Available"
        />
        </div>

        <div className=' w-1/2 h-full py-2'>
          <Room_Details/>

        </div>
        </div>
    </div>
  )
}

export default Rooms