import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.PartofSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
              <p>
           <strong> {definition.definition}</strong><br/>
         <em className="text-primary">   {definition.example}</em>
             </p>
          </div>
        );
      })}
    </div>
  );
}
