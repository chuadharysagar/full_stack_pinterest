import React from 'react'
import './Topbar.css'
import UserButton from '../userButton/userButton'

const TopBar = () => {
  return (
    <div className='topBar'>
       {/* Search input  */}
       <div className='search'>
        <img src="/general/search.svg" alt="search option image"/>
        <input type="text" placeholder='Search'/>
       </div>
       {/* User Profile Option  */}
       <UserButton/>
    </div>
  )
}

export default TopBar