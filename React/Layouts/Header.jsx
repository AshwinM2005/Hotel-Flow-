import React, { useState, useEffect } from 'react';
import "./layout.css";
import { NavLink } from 'react-router-dom';
import { User, Settings, Bell } from "lucide-react";

function Header() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!res.ok) {
          setLoading(false);
          return;
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // 👈 run once

  return (
    <div className='header-section'>
      <div>
        Hello, {loading ? "Loading..." : user?.User_Name || "Guest"}
        <p>Welcome To Your Dashboard</p>
      </div>

      <div style={{ gap: "35px" }}>
        <NavLink to="notification"><Bell className='icon' /></NavLink>
        <NavLink to="settings"><Settings className='icon' /></NavLink>
        <NavLink to="profile"><User className='icon' /></NavLink>
      </div>
    </div>
  );
}

export default Header;