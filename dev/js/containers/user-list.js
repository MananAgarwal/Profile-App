import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/selectUser'

class UserList extends Component {

    renderList() {
        console.log("favuser prop from user-list" + this.props.favUsers);
        return this.props.users.map((user) => {    //map traverses the list of users
            return (
                <li
                    key={user.id}
                    onClick={() => this.props.selectUser(user.id)}   //because onclick calls a function
                >
                    {user.first} {user.last} <i className={ ( this.props.favUsers!=null && this.props.favUsers.includes(user.id) )? "fa fa-heart" : "fa fa-heart-o" } aria-hidden="true"></i>
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users,
        favUsers: state.favUsers
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
