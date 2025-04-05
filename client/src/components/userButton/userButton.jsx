import React, { useState } from 'react'
import './userButton.css'
import Image from '../Image/Image';

const UserButton = () => {
   const [open, setOpen] = useState(false);

   //  temp user
   const currUser = true;

   return currUser ? (<div className='userButton'>
      <Image path="/general/noAvatar.png" alt="" />
      <Image onClick={() => setOpen((prev) => !prev)} path="/general/arrow.svg" alt="" className='arrow' />
      {/* when click over profile show the options  */}
      {open && (<div className="userOptions">
         <div className="userOption">Profile</div>
         <div className="userOption">Setting</div>
         <div className="userOption">LogOut</div>
      </div>)
      }
   </div>) : (
      <a href="/" className='loginLink'>
         Login / Sign Up
      </a>
   )

}

export default UserButton