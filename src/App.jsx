import { useState } from 'react'
import './App.css'
import UserDashBoard_Layout from '../React/UserDashBoard/DashboadLayout/Layout'
import BookingLayout from '../React/UserDashBoard/New_Bookings/Layout'
import Cards from '../React/UserDashBoard/My_Bookings/component/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <UserDashBoard_Layout/>
      <BookingLayout/>
    </>
  )
}

export default App
