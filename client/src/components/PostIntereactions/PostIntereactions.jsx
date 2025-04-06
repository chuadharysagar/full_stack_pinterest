import React from 'react'
import './PostIntereactions.css'
import Image from '../Image/Image'

const PostIntereactions = () => {
  return (
    <div className='postIntereactions'>
      <div className="intereactionIcons">
          <Image path='/general/react.svg' alt=""/>
           273
          <Image path="/general/share.svg" alt=""/>
          <Image path="/general/more.svg" alt=""/>
      </div>
      <button>save</button>
    </div>
  )
}

export default PostIntereactions