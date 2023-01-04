import React from "react";
import "./Card4.css";
const Card4 = ({ IMG }) => {
  const previewImageLoad = (image, string_after) => {
    const SplitText = image?.split("/");
    let newText;
    for (let i = 0; i < SplitText.length; i++) {
      if (SplitText[i] === string_after) {
        newText += `${SplitText[i]}/c_scale,w_150/`;
      } else if (SplitText[i] === "undefined") {
        newText += "";
      } else if (i === SplitText.length - 1) {
        newText += SplitText[i];
      } else {
        newText += `${SplitText[i]}/`;
      }
    }
    const slicedtext = newText.slice(9);
    return slicedtext;
  };
  const LoadoriginalImage = () => {
    const hide = document.querySelectorAll(".show-first");
    hide.forEach((element) => {
      element.style.opacity = "0";
    });
    const show = document.querySelectorAll(".hide-first");
    show.forEach((element) => {
      element.style = "opacity:1; z-index:2";
    });
  };
  const Show = (e) => {
    e.target.classList = "hide-first animate";
  };
  const Hide = (e) => {
    e.target.classList = "hide-first";
  };
  return (
    <>
      <h1 className="card_info">
        A Card With Small Description In It
      </h1>
      <p className="card_info">Card 4</p>
      <p className="card_info">Hover on the image</p>
      {IMG.length !== 0 ? (
        <div id="card_holder">
          {IMG?.map((image, index) => {
            return (
              <div className="main-card4-container" key={index}>
                <img
                  src={previewImageLoad(image.image, "upload")}
                  alt=""
                  className="show-first"
                />
                <img
                  src={image.image}
                  onLoad={LoadoriginalImage}
                  alt=""
                  srcset=""
                  className="hide-first"
                  onMouseEnter={Show}
                  onMouseLeave={Hide}
                />
                <p className="text-data">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veritatis iure dolore aliquid! Delectus, adipisci facere in
                  quis quo eius modi!
                </p>
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
