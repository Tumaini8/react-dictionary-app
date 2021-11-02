import React from "react";
import "./Photos.css";

export default function Photos(props){
    if(props.photos){
        return (
             <section className="Photos">
                 {props.photos.map(function(photo,index){
                     return (
                       <div className="row">
                         <div className="col-6">
                        
                           <img
                             src={photo.src.landscape}
                             className="img-fluid"
                             key={index}
                             alt="word-photos"
                           />
                         </div>
                         <div className="col-6">
                         <img
                           src={photo.src.landscape}
                           className="img-fluid"
                           key={index}
                           alt="word-photos"
                         />
                         </div>
                       </div>
                     );
                 })}
        </section>
        );        
    }else{
        return null;
    }
}