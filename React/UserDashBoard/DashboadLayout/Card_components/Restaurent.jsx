import React from 'react'
import { NavLink } from 'react-router-dom'

function Restaurent() {
  return (
    <NavLink to="restaurent"><div className='restaurent-display'>
      Restaurent
    </div></NavLink>
  )
}

export default Restaurent