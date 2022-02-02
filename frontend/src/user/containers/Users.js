import React from 'react';
import UsersList from '../components/UserList/UsersList';
const Users = () => {
//dummy context REPLACE WITH API
    const USERS = [{
        id: '1',
        name: 'Max Smith',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
        places: 3
    }, {
        id: '1',
        name: 'Max Smith',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
        places: 3
    }]; 

    return <UsersList items = {
        USERS
    }
    />;
}

export default Users;