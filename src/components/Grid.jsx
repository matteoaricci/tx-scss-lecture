import React from "react";
import "../styles/grid.css";

const songs = [
  "percolator",
  "westermarck",
  "glitter",
  "black hole",
  "scare u",
  "ruby",
  "DQ",
  "gatorade",
  "totalizer",
  "julia",
];

const Grid = () => {
  return (
    <div className="grid-container">
        <div className='title'>Guppy Songs</div>
      {songs.map((song) => (
        <div className="grid-item">{song}</div>
      ))}
    </div>
  );
};

export default Grid;
