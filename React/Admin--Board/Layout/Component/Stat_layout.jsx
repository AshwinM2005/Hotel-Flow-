import React from 'react'
import "../layout.css"
import { Calendar, ArrowDownRight, DollarSign } from "lucide-react";
import Stat_Data_Card from './Stat_Data_Card';
import Rating_Card from './Rating_Card';
import RoomAvailability_Card from './RoomAvailability_Card';
import Revenue_Chart from './Revenue_Chart';
import Task_Card from './Task_Card';



function Stat_layout() {
  return (
    
    <div className="dashboard-content">

      {/* TOP STATS GRID */}
      <div className="admin-cards-grid">
        <Stat_Data_Card
          title="New Bookings"
          value="840"
          icon={<Calendar size={18} />}
          trend={8.7}
          trendText="from last week"
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
          title="Total Revenue"
          value="$123,980"
          icon={<DollarSign size={18} />}
          trend={5.7}
          trendText="from last week"
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
                occupied={286}
                reserved={87}
                available={32}
                notReady={13}
              />
            </div>
            <div className='left-bottom'></div>
                <Stat_Data_Card
                  title="New Bookings"
                  value="840"
                  icon={<Calendar size={18} />}
                  trend={8.7}
                  trendText="from last week"
                  variant="success"
                />
        </div>

        <div className='right'>
          <Revenue_Chart />
        </div>

      </div>


    </div>
  );
}

export default Stat_layout;
