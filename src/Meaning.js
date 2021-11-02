import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h2>{props.meaning.PartofSpeech}</h2>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong> Defininition:</strong> {definition.definition}
                <br />
                <strong>Example:</strong>{" "}
                <em className="text-primary">{definition.example}</em>
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
