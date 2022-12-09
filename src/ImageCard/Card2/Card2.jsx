import React from "react";
import { useEffect } from "react";
import "./Card2.css";
const Card2 = ({ IMG }) => {
  useEffect(() => {
    console.log(IMG);
  }, [IMG]);
  return (
    <>
    <h1 className="card_info">A Card With Some Description In It</h1>
    <p className="card_info">Card 2</p>
    <p className="card_info">Hover on the image</p>
      {IMG.length !== 0 ? (
        <div id="card_holder">
          {IMG?.map((image, index) => {
            return (
              <div
              key={image._id}
                className="main_card2_container"
                style={{
                  "--delay": `${index}`,
                }}
              >
                <img src={image.image} alt="" />
                <div className="card2_text">
                  <div className="car2_desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates aperiam, doloremque tempora, expedita delectus,
                      maiores magnam quae culpa dolore distinctio sit eaque
                      adipisci! Corporis, assumenda!
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

export default Card2;
