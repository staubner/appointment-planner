import React from "react";

export const Tile = ({ name, description }) => {

  return (
    <div className="tile-container">
      <p className='tile tile-title'>{name}</p>
      {description.map((item, index) => {
        return <p className="tile" key={index}>{item}</p>
      })}
    </div>
  );
};
