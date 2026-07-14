import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Home.css'
import './animation.css'


const Home = () => {
  const navigate = useNavigate();
  return (
     <div className="home-body">
        <p>Create Your Note</p>
        <span>This is a note app where you can create you notes</span>

        <div className='home-btn'>
          <button id='main-btn' onClick={() => {navigate('/newNote')}}>Create Note</button>
          <button onClick={() => {navigate('/pastes')}}>View Note</button>
        </div>
      </div>
  )
}

export default Home
