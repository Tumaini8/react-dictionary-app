import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div className="row">
              <img
                src={photo.src.landscape}
                className="img-fluid"
                key={index}
                alt="word-photos"
              />
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
