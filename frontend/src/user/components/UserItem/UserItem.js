import React from "react";
import './UserItem.css';
import { Link } from "react-router-dom";
import Avatar from "../../../shared/components/UIElements/Avatar/Avatar";

const UserItem = props =>{
    return (
        <li className="userItem">
            <div className="user-item_content">
                <Link to={`/${props.id}/places`}>
                       <Avatar className={`${props.id}`} img={props.img} alt={props.name} />
                    <div className="user-item_info">
                        <h2>{props.name}</h2>
                        <h2>{props.placeCount}</h2>
                    </div>
                </Link>
            </div>
        </li>
    );
};

export default UserItem;