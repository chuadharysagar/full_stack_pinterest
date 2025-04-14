import React from 'react'
import './Topbar.css'
import UserButton from '../userButton/userButton'
import Image from '../Image/Image'
import { useNavigate } from 'react-router'

const TopBar = () => {
  // search function
   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?search=${e.target[0].value}`);
  }



  return (
    <div className='topBar'>
      {/* Search input  */}
      <form onSubmit={handleSubmit} className='search'>
        <Image path="/general/search.svg" alt="search option image" />
        <input type="text" placeholder='Search' />
      </form>
      {/* User Profile Option  */}
      <UserButton />
    </div>
  )
}

export default TopBar