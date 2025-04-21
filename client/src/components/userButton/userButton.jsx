import React, { useState } from 'react'
import './userButton.css'
import Image from '../Image/Image';
import apiRequest from '../../utils/apiRequest';
import { useNavigate } from 'react-router';
import useAuthStore from '../../utils/authStore';
import { Link } from 'react-router';

const UserButton = () => {
   const [open, setOpen] = useState(false);

   //  temp user
   const { currentUser ,removeCurrentUser } = useAuthStore();

   const navigate = useNavigate();


   const handleLogout = async () => {
      try {
         await apiRequest.post("/users/auth/logout");
         removeCurrentUser();
         navigate("/auth");
      } catch (error) {
         console.log(error);
      }
   }

   return currentUser ? (<div className='userButton'>
      <Image path="/general/noAvatar.png" alt="" />
      <div onClick={() => setOpen((prev) => !prev)}>
         <Image path={currentUser.img || "/general/arrow.svg"} alt="" className='arrow' />
      </div>
      {/* when click over profile show the options  */}
      {open && (<div className="userOptions">
         <Link to={`/profile/${currentUser.username}`} className="userOption">Profile</Link>
         <div className="userOption">Setting</div>
         <div className="userOption"
            onClick={handleLogout}>
            LogOut</div>
      </div>)
      }
   </div>) : (
      <Link to="/auth" className='loginLink'>
         Login / Sign Up
      </Link>
   )

}

export default UserButton