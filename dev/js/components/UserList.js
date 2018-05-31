import React from 'react';
import UserListContainer from '../containers/user-list';
// require('../../scss/style.scss');

export default class UserList extends React.Component {
    render() {
        return (
            <div>
               <h2>User List</h2>
               <UserListContainer />
            </div>
        );
    }
}