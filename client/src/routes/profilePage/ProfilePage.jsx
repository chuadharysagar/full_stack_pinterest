import React, { useState } from 'react'
import './ProfilePage.css'
import Image from '../../components/Image/Image'
import Gallary from '../../components/gallary/Gallary'
import Collections from '../../components/Collections/Collections'

const ProfilePage = () => {
  const [type, setType] = useState("saved");
  return (
    <div className='profilePage'>
      <Image className="profileImg" 
      path="/general/noAvatar.png"
      w={100}
      h={100}
      alt="" />
      <h1 className='profileName'>John Doe</h1>
      <span className='profileUsername'>@johdoe</span>
      <div className='followCounts'>10 followers .20 followig</div>
      <div className='profileIntereactions'>
        <Image path="/general/share.svg" />
        <div className='profileButtons'>
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="/general/more.svg" />
      </div>
      <div className="profileOptions">
        <span className={type=="created"?"active":""}
        onClick={()=> setType("created")}
        >Created</span>
        <span className={type=="saved"?"active":""}
        onClick={()=> setType("saved")}
        >Saved</span> 
      </div>
      {type==="created" ?<Gallary/>:<Collections/>}
    </div>
  )
}

export default ProfilePage