import React from "react";
import './UsersList.css';
import UserItem from '../UserItem/UserItem'
const UsersList = props => {
    //no users
    if(props.items.length == 0)
    {
        return (<div className="center"> <h2> No Users Found. :( </h2></div>);
    }

    return (
        <ul className="userList">
            {props.items.map(user => (
                <UserItem 
                key={user.id} 
                id = {user.id}
                img={user.image} 
                name={user.name} 
                placeCount={user.places}/>
            ))}
        </ul>
    );
};

export default UsersList;