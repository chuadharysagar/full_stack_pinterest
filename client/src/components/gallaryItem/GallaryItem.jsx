import React from 'react'
import './GallaryItem.css'
import { Link } from 'react-router'
import Image from '../Image/Image'

const GallaryItem = ({ item }) => {
  //  using the new height calculate the optimied height 
  const optimizedHeight = (372 * item.height) / item.width;

  return (
    <div className='gallaryItem' style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}>
      {/* <img src={item.media} alt="gallary item"/> */}
      <Image path={item.media} alt="" w={372} h={optimizedHeight} />
      <Link to={`/pin${item.id}`} className='overlay' />
      <button className='saveButton'>Save</button>

      <div className='overlayIcons'>
        <button>
          <Image path="/general/share.svg" alt="" />
        </button>
        <button>
          <Image path="/general/share.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default GallaryItem