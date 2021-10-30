import React from "react";
import Loader from "react-loader-spinner";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <br />
      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
         <Loader type="Audio" color="#9670f4" height={40} width={40} />
      </a>
    </div>
  );
}
