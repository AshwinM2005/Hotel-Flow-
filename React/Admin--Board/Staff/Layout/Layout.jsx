import React from 'react'
import Staff_Lists from '../Components/List'
import Quick_box from '../Components/Quick_box'
import Searchbar from '../Components/Searchbar'

function Staff_Layout() {
  return (
    <div className='bg-gray-200 w-full rounded-2xl shadow-sm p-7'>
        <Searchbar/>
        <Quick_box/>
        
        <Staff_Lists/>
        
    </div>
  )
}

export default Staff_Layout