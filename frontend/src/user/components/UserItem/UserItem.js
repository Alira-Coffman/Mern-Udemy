import React from "react";
import './UserItem.css';
import { Link } from "react-router-dom";
import Avatar from "../../../shared/components/UIElements/Avatar/Avatar";
import { Badge } from 'reactstrap';
import Card from "../../../shared/components/UIElements/Card/Card";

const UserItem = props =>{
    return (
        <li className="userItem">
            <Card className= "user-item_content ">
            <Link to={`/${props.id}/places`}>
                <div className="user-item_content d-flex justify-content-between align-items-center p-3">
                    <Avatar className={`${props.id}`} img={props.img} alt={props.name} />
                    <h2>{props.name}</h2>
                    <Badge color="dark">{props.placeCount}</Badge>
                </div>
            </Link>
            </Card>
        </li>
    );
};

export default UserItem;