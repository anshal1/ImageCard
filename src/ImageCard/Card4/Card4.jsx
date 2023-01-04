import React from "react";
import { useEffect } from "react";
import "./Card4.css";
const Card4 = ({ IMG }) => {
    const previewImageLoad =(image)=>{
        const TempArry =[];
        const SplitText = image?.split("/");
        console.log(SplitText);
        let newText
    }
  useEffect(() => {
    // console.log(IMG);
    IMG.forEach(element => {
        previewImageLoad(element.image);
    });
  }, [IMG]);
  return (
    <>
      <h1 className="card_info">
        A Card With A Small Title And Small Description In It
      </h1>
      <p className="card_info">Card 1</p>
      <p className="card_info">Hover on the image</p>
      {IMG.length !== 0 ? (
        <div id="card_holder">
          {IMG?.map((image, index) => {
            return (
              <div
                className="main-card4-container"
                key={index}
                style={{ "--image": `url(${image.image})` }}
              >
                Hello World
              </div>
            );
          })}
        </div>
      ) : (
        <h1>No Images available</h1>
      )}
    </>
  );
};

export default Card4;
