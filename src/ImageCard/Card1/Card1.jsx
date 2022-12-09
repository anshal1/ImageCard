import React from "react";
import { useEffect } from "react";
import "./Card1.css";
const Card1 = ({ IMG }) => {
  useEffect(() => {
    console.log(IMG);
  }, [IMG]);
  return (
    <>
    <h1 className="card_info">A Card With A Small Title And Small Description In It</h1>
    <p className="card_info">Card 1</p>
    <p className="card_info">Hover on the image</p>
      {IMG.length !== 0 ? (
        <div id="card_holder">
          {IMG?.map((image, index) => {
            return (
              <div
                key={image._id}
                className="main_card1_container"
                style={{ backgroundImage: `url(${image?.image})`, "--delay": `${index}` }}
              >
                <div className="text">
                  <div className="heading">
                    <h2>Something New</h2>
                  </div>
                  <div className="para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores, quis.
                    </p>
                  </div>
                </div>
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

export default Card1;
