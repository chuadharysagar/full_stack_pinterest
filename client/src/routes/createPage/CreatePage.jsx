import React from 'react'
import './CreatePage.css'
import Image from '../../components/Image/Image'

const CreatePage = () => {
  return (
    <div className='createPage'>
      <div className="createTop">
        <h1>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Image path="/general/upload.svg" alt="" />
            <span>Choose a file to uplaod</span>
          </div>
          <div className="uploadInfo">
            We recommend usinng high quality .jpg files less than 20 flies less thann 200 MB.
          </div>
        </div>
        <form className="createForm">
          <div className="createFormItem">
            <label htmlFor="">Title</label>
            <input type="text"
              placeholder='Add a title'
              name='title'
              id='title' />
          </div>
          <div className="createFormItem">
            <label htmlFor="">Description</label>
            <textarea type="text"
              rows={6}
              placeholder='Add a detailed description'
              name='description'
              id='description' />
          </div>
          <div className="createFormItem">
            <label htmlFor="">Link</label>
            <input type="text"
              placeholder='Add a link'
              name='link'
              id='link' />
          </div>
          <div className="createFormItem">
            <label htmlFor="">Board</label>
             <select name="board" id="board">
              <option >Choose a board</option>
              <option value="1">Board 1</option>
              <option value="2">Board 2</option>
              <option value="3">Board 3</option>
             </select>
          </div>
          <div className="createFormItem">
            <label htmlFor="">Tagged topics</label>
            <input type="text"
              placeholder='Add a tag'
              name='tags'
              id='tags' />
              <small>Don't worry people won't see your tags</small>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePage