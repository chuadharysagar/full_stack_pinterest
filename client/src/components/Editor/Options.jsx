import React, { useState } from 'react'
import useEditorStore from '../../utils/editorStore'
import { HexColorPicker } from 'react-colorful'


const portraitSizes = [
  {
    name: "1:2",
    width: 1,
    height: 2,
  },
  {
    name: "9:16",
    width: 9,
    height: 16,
  },
  {
    name: "2:3",
    width: 2,
    height: 3,
  },
  {
    name: "3:4",
    width: 3,
    height: 4,
  },
  {
    name: "4:5",
    width: 4,
    height: 5,
  },
  {
    name: "1:1",
    width: 1,
    height: 1,
  },
];

const landscapeSizes = [
  {
    name: "2:1",
    width: 2,
    height: 1,
  },
  {
    name: "16:9",
    width: 16,
    height: 9,
  },
  {
    name: "3:2",
    width: 3,
    height: 2,
  },
  {
    name: "4:3",
    width: 4,
    height: 3,
  },
  {
    name: "5:4",
    width: 5,
    height: 4,
  },
  {
    name: "1:1",
    width: 1,
    height: 1,
  },
];


const Options = ({ previewImg }) => {
  const { selectedLayer,
    textOptions,
    setTextOptions,
    canvasOptions,
    setCanvasOptions } = useEditorStore();
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
   
  // handle  Imaeg size 
  const handleSizeClick = (size) => {
    let newHeight;

    if (size === "original") {
      if (canvasOptions.orientation === "portrait") {
        newHeight = (375 * previewImg.width) / previewImg.height;
      } else {
        newHeight = (375 * previewImg.height) / previewImg.widths;
      }
    } else {
      newHeight = (375 * size.height) / size.width;
    }
    setCanvasOptions({
      ...canvasOptions,
      size: size === "original" ? "original" : size.name,
      height: newHeight
    });
  }


  // handle the image orientation
  const handleOrientationClick = (orientation) => {
    const newHeight = orientation === "portrait" ?
      (375 * previewImg.width) / previewImg.height :
      (375 * previewImg.height) / previewImg.widths;

    setCanvasOptions({
      ...canvasOptions,
      orientation,
      size: "original",
      height: newHeight
    })
  }

  return (
    <div className='options'>
      {selectedLayer === "text" ?
        //  TEXT OPTIONS 
        <div className=''>
          <div className="editingOption">
            <span>Font size</span>
            <input type="number" value={textOptions.fontSize}
              onChange={(e) => setTextOptions({ ...textOptions, fontSize: e.target.value })} />
          </div>

          <div className="editingOption">
            <span>Color</span>
            <div className="textColor">
              <div className="colorPreview"
                onClick={() => setIsColorPickerOpen((prev) => !prev)}
                style={{ background: textOptions.color }}>
                {isColorPickerOpen &&
                  (<div className='colorPicker'>
                    <HexColorPicker color={textOptions.color}
                      onChange={(color) => setTextOptions({ ...textOptions, color: color })}
                    />
                  </div>)}
              </div>
            </div>
          </div>
        </div>
        : <div className=''>
          <div className="editingOption">
            <span>Orientation</span>
            <div className="orientations">
              <div className={`orientation ${canvasOptions.orientation === "portrait" ? "selected" : ""}`}
                onClick={() => handleOrientationClick("portrait")}>
                P
              </div>
              <div className={`orientation ${canvasOptions.orientation === "landscape" ? "selected" : ""}`}
                onClick={() => handleOrientationClick("landscape")}>
                L
              </div>
            </div>
          </div>

          <div className="editingOption">
            <span>Size</span>
            <div className="sizes">
              <div className={`size ${canvasOptions.size === "original" ? "selected" : ""}`}
                onClick={() => handleSizeClick("original")}
              >
                Original
              </div>
              {canvasOptions.orientation === "portrait" ?
                <>
                  {portraitSizes.map((size) => (
                    <div
                      className={`size ${canvasOptions.size === size.name ? "selected" : ""}`}
                      onClick={() => handleSizeClick(size)}
                      key={size.name}>
                      {size.name}
                    </div>
                  ))}
                </> :
                <>
                  {landscapeSizes.map(size => (
                    <div className={`size ${canvasOptions.size === size.name ? "selected" : ""}`}
                      onClick={() => handleSizeClick(size)}
                      key={size.name}>
                      {size.name}
                    </div>
                  ))}
                </>
              }
            </div>
          </div>

          <div className="editingOption">
            <span>Background Color</span>
            <div className="bgColor">
              <div className="textColor">
                <div className="colorPreview"
                  onClick={() => setIsColorPickerOpen((prev) => !prev)}
                  style={{ background: canvasOptions.backgroundColor }}>
                  {isColorPickerOpen &&
                    (<div className='colorPicker'>
                      <HexColorPicker color={canvasOptions.backgroundColor}
                        onChange={(color) => setCanvasOptions({ ...canvasOptions, backgroundColor: color })}
                      />
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Options