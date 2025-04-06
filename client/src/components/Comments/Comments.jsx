import React, { useState } from 'react'
import './Comments.css'
import Image from '../Image/Image'
import EmojiPicker from 'emoji-picker-react';


const Comments = () => {
  const[open, setOpen] = useState(false);

  return (
    <div className='comments'>
      <div className="commentList">
        <span className="commentCount">10 comments</span>

        {/* single commet  */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commetContent">
            <span className='commentUsername'>John doe</span>
            <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>

        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commetContent">
            <span className='commentUsername'>John doe</span>
            <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>


        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commetContent">
            <span className='commentUsername'>John doe</span>
            <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>

        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commetContent">
            <span className='commentUsername'>John doe</span>
            <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        {/* input form for the comment section  */}
        <form className='commentForm'>
          <input type="text" placeholder='Add a comment' />
          <div className="emoji">
            <div onClick={() => setOpen(prev => !prev)}>😊</div>
            {open && (<div className='emojiPicker'>
              <EmojiPicker />
            </div>)}
          </div>
        </form>
      </div>

    </div>
  )
}

export default Comments