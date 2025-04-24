import React from 'react'
import useEditorStore from '../../utils/editorStore'
import Image from '../Image/Image';


const Workspace = ({ previewImg }) => {
  const { textOptions, setTextOptions } = useEditorStore();

  return (
    <div className='workspace'>
      <div className="canvas">
        <img src={previewImg.url} alt="preview image here" />
        {textOptions.text && (
          <div className='text'
            style={{
              left: textOptions.left,
              top: textOptions.top,
              fontSize: `${textOptions.fontSize}px`,
            }}
          >
            <input type="text"
              onChange={(e) => setTextOptions({ ...textOptions, text: e.target.value })}
              value={textOptions.text}
              style={{ color: textOptions.color }}
            />
            <div className='deleteTextButton'
              onClick={() => setTextOptions({ ...textOptions, text: "" })}>
              <Image path="/general/delete.svg" alt="delete text button" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Workspace