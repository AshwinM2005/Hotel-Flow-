import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import "./layout.css"
import Sidebar_Layout from './Sidebar_Layout'

function DashBoard_layout() {
  return (
    <div className='dashboard_layout'>
        
            <aside className='sidebar'>
                <Sidebar_Layout/>
            </aside>

            <main className='main-section'>
                <header className='nav-header'>
                    <Header/>
                </header>
                <section className='content-section'>
                    <Outlet/>
                </section>
            </main>
        
    </div>
  )
}

export default DashBoard_layout