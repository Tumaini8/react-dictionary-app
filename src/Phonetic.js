import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <span className="btn btn-success">
        <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
          Audio
        </a>
      </span>
    </div>
  );
}
