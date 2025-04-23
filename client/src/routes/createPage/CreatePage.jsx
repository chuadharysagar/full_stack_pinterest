import React, { useEffect } from 'react'
import './CreatePage.css'
import Image from '../../components/Image/Image'
import useAuthStore from '../../utils/authStore'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import Editor from '../../components/Editor/Editor'

const CreatePage = () => {
  // if auhtenticated the only allowed to create post 
  const { currentUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth");
    }
  }, [navigate, currentUser])

  const [file, setFile] = useState(null);
  const previewImgURL = file ? URL.createObjectURL(file) : null;

  const [isEditig, setIsEditing] = useState(false);

  return (
    <div className='createPage'>
      <div className="createTop">
        <h1>{isEditig ? "Design your Pin" : "Create Pin"}</h1>
        <button>{isEditig ? "Done" : "Publish"}</button>
      </div>
      {isEditig ? <Editor /> :
        (<div className="createBottom">
          {previewImgURL ? <div className='preview'>
            <img src={previewImgURL} alt="previewImage" />
            <div className='editIcon'
            onClick={()=>setIsEditing(true)}>
              <Image path="/general/edit.svg" alt="edit option" />
            </div>
          </div> :
            (<><label htmlFor='file' className="upload">
              <div className="uploadTitle">
                <Image path="/general/upload.svg" alt="" />
                <span>Choose a file to uplaod</span>
              </div>
              <div className="uploadInfo">
                We recommend usinng high quality .jpg files less than 20 flies less thann 200 MB.
              </div>
            </label>
              <input type="file"
                id='file'
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              /></>)}

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
        </div>)}
    </div>
  )
}

export default CreatePage