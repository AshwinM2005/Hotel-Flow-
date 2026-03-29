import { useEffect, useState } from 'react'
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { Routes, Route } from "react-router-dom";
import UserDashBoard_Content from '../React/UserDashBoard/DashboadLayout/Layout'
import BookingLayout from '../React/UserDashBoard/New_Bookings/Layout'
import DashBoard_layout from '../React/Layouts/DashBoard_layout'
import My_Booking_Layout from '../React/UserDashBoard/My_Bookings/Layout';
import Admin_Layout from '../React/Admin--Board/Layout/Admin_Layout';
import Todo_provider from '../React/Admin--Board/Tasks/components/Todo_provider';
import Staff_Layout from '../React/Admin--Board/Staff/Layout/Layout';
import Rooms from '../React/Admin--Board/Room/Rooms';
import Profile_Layout from '../React/UserDashBoard/Profile/Layout';
import Hotel_Service_Layout from '../React/UserDashBoard/Services/Layout';
import Document_Layout from '../React/UserDashBoard/Documents/Layout';

function App() {
  const [count, setCount] = useState(0)
  // const role = "admin" 
  // const role = "user" 

  const [role , setRole] = useState(null);
  useEffect (()=>{
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");
    if (urlToken) {
    localStorage.setItem("token", urlToken);

    // clean URL (remove token from address bar)
    window.history.replaceState({}, document.title, "/");
  }
  const token = localStorage.getItem("token");
    if(!token){
      window.location.href = "http://127.0.0.1:5500/Home_Page/login_page/login.html";
      return ; 
    }
    fetch("http://localhost:3000/dashboard" , {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
  console.log("STATUS:", res.status); // 👈 ADD THIS

  if (!res.ok) {
    throw new Error("API failed");
  }
  return res.json();
})
.then(data => {
  console.log("DATA:", data); // 👈 ADD THIS
  setRole(data.Type.toLowerCase());
})
.catch(err => {
  console.error("ERROR:", err);
});
  },[])
   

   let routes ;
   let task

   if (role==="admin") {
      routes=(
      <>
        <Route index element={<Admin_Layout/>}/>
        <Route path="task" element={<Todo_provider/>} />
        <Route path="staff" element={<Staff_Layout/>} />
        <Route path="rooms" element={<Rooms/>} />
        
      </>
      );
      
    }else if (role==="user"){
      routes =(
    <>
      <Route index element={<UserDashBoard_Content/>} />
      <Route path="profile" element={<Profile_Layout/>} />
      <Route path="new-booking" element={<BookingLayout/>} />
      <Route path="my_bookings" element={<My_Booking_Layout/>} />
      <Route path="user_document" element={<Document_Layout/>} />
      <Route path="hotel_service" element={<Hotel_Service_Layout/>} />
        
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
