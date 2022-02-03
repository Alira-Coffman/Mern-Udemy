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
        <div className="container w-25">
            <ul className="userList d-flex justify-content-center flex-column">
                        {props.items.map(user => (
                            <UserItem 
                            key={user.id} 
                            id = {user.id}
                            img={user.image} 
                            name={user.name} 
                            placeCount={user.places}/>
                        ))}
                    </ul>
        </div>
        
    );
};

export default UsersList;