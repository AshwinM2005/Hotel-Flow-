import React from 'react'
import "../layout.css"
import { Calendar, ArrowDownRight, DollarSign } from "lucide-react";
import Stat_Data_Card from './Stat_Data_Card';
import Rating_Card from './Rating_Card';
import RoomAvailability_Card from './RoomAvailability_Card';
import Revenue_Chart from './Revenue_Chart';
import Task_Card from './Task_Card';
import Booking_Platform from './Booking_Platform';
import { useEffect, useState } from 'react';



function Stat_layout() {

  const [stats, setStats] = useState({
  occupied: 0,
  reserved: 0,
  available: 0,
  not_ready: 0
  });

  const fetchBookings = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("http://localhost:3000/admin/room-stats", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    console.log(data);

    setStats(data); // ✅ directly set object

  } catch (err) {
    console.error(err);
  }
};

const [bookingsCount, setbookingsCount] = useState(0);

const fetchBookingsCount = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("http://localhost:3000/admin/new-bookings-count", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    setbookingsCount(data.count);

  } catch (err) {
    console.error(err);
  }
};

const [revenue, setRevenue] = useState(0);

const fetchRevenue = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("http://localhost:3000/admin/revenue", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    setRevenue(data.revenue);

  } catch (err) {
    console.error(err);
  }
};


    useEffect(() => {
      fetchRevenue();
      fetchBookingsCount();
      fetchBookings();
    }, []);


  return (
    
    <div className="dashboard-content">

      {/* TOP STATS GRID */}
      <div className="admin-cards-grid">
        <Stat_Data_Card
          title="New Bookings"
          value={bookingsCount ? bookingsCount : "0"}
          icon={<Calendar size={18} />}
          trend={8.7}
          trendText="from last month"
          variant="success"
        />

        <Stat_Data_Card
          title="Check-In"
          value="231"
          icon={<ArrowDownRight size={18} />}
          trend={3.56}
          trendText="from last week"
          variant="default"
        />

        <Stat_Data_Card
          title="Check-Out"
          value="124"
          icon={<ArrowDownRight size={18} />}
          trend={-1.06}
          trendText="from last week"
          variant="danger"
        />

        <Stat_Data_Card
          title="Revenue"
          value={revenue ? `₹${revenue.toLocaleString()}` : "₹0"}
          icon={<DollarSign size={18} />}
          trend={5.7}
          trendText="from last month"
          variant="success"
        />

        <Rating_Card
          title="Hotel Rating"
          rating={4.6}
          totalReviews={1280}
          variant="success"
        />
      </div>

      {/* <div className="dashboard-widgets-grid">
        <RoomAvailability_Card
          occupied={286}
          reserved={87}
          available={32}
          notReady={13}
        />

        <Revenue_Chart />
        
      </div> */}

      <div className='dashboard-widgets-grid'>
        <div className='left'>
            <div className='left-top'>
              <RoomAvailability_Card
                occupied={stats.occupied}
                reserved={stats.reserved}
                available={stats.available}
                notReady={stats.not_ready}
              />
            </div>
            <div className='left-bottom'></div>
                <Booking_Platform/>
        </div>

        <div className='right'>
          <Revenue_Chart />
        </div>

      </div>


    </div>
  );
}

export default Stat_layout;
