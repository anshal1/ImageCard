import React from "react";
import "./Card4.css";
const Card4 = (IMG) => {
  return (
    <>
      <h1 className="card_info">
        A Card With A Small Title And Small Description In It
      </h1>
      <p className="card_info">Card 1</p>
      <p className="card_info">Hover on the image</p>
      {IMG.length !== 0 ? (
        <div>Fourth Card</div>
      ) : (
        <h1>No Images available</h1>
      )}
    </>
  );
};

export default Card4;
