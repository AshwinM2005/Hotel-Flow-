import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { Routes, Route } from "react-router-dom";
import UserDashBoard_Content from '../React/UserDashBoard/DashboadLayout/Layout'
import BookingLayout from '../React/UserDashBoard/New_Bookings/Layout'
import Cards from '../React/UserDashBoard/My_Bookings/component/Cards'
import DashBoard_layout from '../React/Layouts/DashBoard_layout'
import My_Booking_Layout from '../React/UserDashBoard/My_Bookings/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DashBoard_layout/>}>
        <Route index element={<UserDashBoard_Content/>} />
        <Route path="new-booking" element={<BookingLayout/>} />
        <Route path="my_bookings" element={<My_Booking_Layout/>} />

      </Route>

    </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
