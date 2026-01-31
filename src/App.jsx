import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { Routes, Route } from "react-router-dom";
import UserDashBoard_Content from '../React/UserDashBoard/DashboadLayout/Layout'
import BookingLayout from '../React/UserDashBoard/New_Bookings/Layout'
import DashBoard_layout from '../React/Layouts/DashBoard_layout'
import My_Booking_Layout from '../React/UserDashBoard/My_Bookings/Layout';
import Admin_Layout from '../React/Admin--Board/Layout/Admin_Layout';

function App() {
  const [count, setCount] = useState(0)
  const role = "admin" 
  // const role = "user" 
   let routes ;

   if (role==="admin") {
      routes=(
      <>
        <Route index element={<Admin_Layout/>}/>
        
      </>
      );
      
    }else {
      routes =(
    <>
      <Route index element={<UserDashBoard_Content/>} />
      <Route path="new-booking" element={<BookingLayout/>} />
      <Route path="my_bookings" element={<My_Booking_Layout/>} />
        
    </>
    )}

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard_layout role={role}/>}>
          {routes}
          
        </Route>

      </Routes>

    
    </BrowserRouter>

   
  )
}

export default App
