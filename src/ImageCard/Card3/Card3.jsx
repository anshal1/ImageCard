import React from "react";
import { useState } from "react";
import "./Card3.css";
const Card3 = ({ IMG }) => {
  const [preview, setpreview] = useState("");
  const [Animate, setAnimate] = useState("");
  return (
    <>
      <h1 className="card_info">A Card With Image Preview</h1>
      <p className="card_info">Card 3</p>
      <p className="card_info">Click on the image</p>
      {IMG.length !== 0 ? (
        <div id="card_holder">
          {IMG?.map((image, index) => {
            return (
              <div
                key={image._id}
                className="main_card3_container"
                style={{
                  backgroundImage: `url(${image?.image})`,
                  "--delay": `${index}`,
                  "--shadow": `${window.innerWidth}`,
                }}
                onClick={() => {
                  setAnimate("");
                  setTimeout(() => {
                    setAnimate("animate");
                  }, 100);
                  setpreview(image.image);
                }}
              ></div>
            );
          })}
          <div
            className={`full_image_preview ${Animate}`}
            style={{ "--shadow": `${window.innerWidth}` }}
          >
            <img src={preview} alt="" srcset="" />
            <button onClick={()=>{setAnimate("")}}>Close</button>
          </div>
        </div>
      ) : (
        <h1>No Images available</h1>
      )}
    </>
  );
};

export default Card3;
