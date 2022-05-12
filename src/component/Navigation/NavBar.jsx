import React from 'react'
import './style/NavBar.scss'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



export default function NavBar() {


    return (
    <div className='nav-wrapper'>
      <div className='nav-cont'>
        <div className='nav-logo'>
          <NavLink className='my-name' to="/">T Buscemi</NavLink>
        </div>
          <div className='nav-links'>
            <NavLink className='text-links' to="/">Home</NavLink>
          </div>
        </div>
    </div>
  )
}
