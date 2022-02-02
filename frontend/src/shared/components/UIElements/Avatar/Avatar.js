import React from "react";
import './Avatar.css'
const Avatar = props => {
    return (
        <div className ={`avatar ${props.className}`}>
            <img src={props.img} alt={props.alt} />
        </div>
 );
}

export default Avatar;