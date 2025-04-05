import React from 'react'
import './Topbar.css'
import UserButton from '../userButton/userButton'
import Image from '../Image/Image'

const TopBar = () => {
  return (
    <div className='topBar'>
       {/* Search input  */}
       <div className='search'>
        <Image path="/general/search.svg" alt="search option image"/>
        <input type="text" placeholder='Search'/>
       </div>
       {/* User Profile Option  */}
       <UserButton/>
    </div>
  )
}

export default TopBar