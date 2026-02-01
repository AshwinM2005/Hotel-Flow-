import React from 'react'
import { useEffect ,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import "./layout.css"
import Sidebar_Layout from './Sidebar_Layout'

function DashBoard_layout({role}) {

  return (
    <div className='dashboard_layout flex-1 min-h-screen'>
        
            <aside className='sidebar'>
                <Sidebar_Layout role={role}/>
            </aside>

            <main className='main-section'>
                <header className='nav-header'>
                    <Header/>
                </header>
                <section className='content-section flex-1'>
                    <Outlet/>
                </section>
            </main>
        
    </div>
  )
}

export default DashBoard_layout