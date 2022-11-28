import React from "react";
import "./Photos.css";

export default function Photos (props) {
    if(props.photos) {
        console.log(props.photos);
        return <section className="Photos">
            <div clasName="row">
            {props.photos.map(function(photo, index){
                return(
                    <div clasName="col-3"  key={index}>
                    <a href={photo.src.original} target="_blank"
                    rel="noreferrer">
                    <img src={photo.src.tiny}
                    className="img-fluid"
                    alt="dictionary-search"/>
                    </a>
                    </div>
                )
            })}
            </div>
            </section>;
    } else {
        return null;
    }
}