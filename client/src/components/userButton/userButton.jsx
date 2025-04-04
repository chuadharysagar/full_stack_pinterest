import React, { useState } from 'react'
import './userButton.css'

const UserButton = () => {
   const [open, setOpen] = useState(false);

   //  temp user
   const currUser = true;

   return currUser ? (<div className='userButton'>
      <img src="/general/noAvatar.png" alt="" />
      <img onClick={() => setOpen((prev) => !prev)} src="/general/arrow.svg" alt="" className='arrow' />
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