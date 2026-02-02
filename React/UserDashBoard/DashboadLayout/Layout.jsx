import React from 'react'
import "./layout.css"
import UpcomingStay from './Card_components/upcomingStay'
import Doc_Status from "./Card_components/Doc_Status"
import Rewards from './Card_components/Rewards'
import Restaurent from './Card_components/Restaurent'
import Transport from './Card_components/Transport'
import RoomService from './Card_components/RoomService'


function UserDashBoard_Content() {
  return (
    <div className='main-content'>
        <div className='left-content'>
            <UpcomingStay/>
            <p className='quick-action' >
            Quick Actions :
            </p>
            <div className='quick-action-card'>
            <Restaurent/>
            <RoomService/>
            <Transport/>
                    
            </div>
        </div>
        <div className='right-content'>
            <Doc_Status/> <br />
            <Rewards/>
        </div>
    </div>
  )
}

export default UserDashBoard_Content;