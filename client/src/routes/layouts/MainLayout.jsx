import React from 'react'
import './MainLayout.css'
import LeftBar from '../../components/leftBar/LeftBar'
import TopBar from '../../components/topBar/TopBar'
import { Outlet } from 'react-router'

const mainLayout = () => {

   // common layout for all the componet to use the  nested routig with common componet outlet
   return (
      <div className='app'>
         <LeftBar />
         <div className="content">
            <TopBar />
            <Outlet/>
         </div>
      </div>
   )
}

export default mainLayout