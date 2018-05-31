import React from 'react';
import UserDetailsContainer from '../containers/user-detail';
// require('../../scss/style.scss');

export default class UserDetail extends React.Component {
    render() {
        return (
            <div>
               <h2>User Detail</h2>
               <UserDetailsContainer />
            </div>
        );
    }
}