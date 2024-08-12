import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({ data }) => {
  return (
    <div>
      {data.length > 0 ? data.map(({ name, ...rest }, index) => {
        return <Tile name={name} description={Object.values(rest)} key={index} />
      }) : <p>No information to display</p>}
    </div>
  );
};
