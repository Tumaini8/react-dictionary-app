import React from "react";
import Loader from "react-loader-spinner";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <br />
      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
        <Loader type="Audio" color="#00BFFF" height={20} width={20} />
      </a>
    </div>
  );
}
