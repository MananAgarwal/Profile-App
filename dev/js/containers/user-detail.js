import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {favUser} from '../actions/favUser';

import {Link} from 'react-router-dom';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.userId) {
            return (<div>Select a user...</div>);
        }
        var ID = this.props.userId-1;  //array number of the user
        console.log("selected user array number" + ID);

        return (
            <div>
                <img src={this.props.allusers[ID].thumbnail} />
                <h2>{this.props.allusers[ID].first} {this.props.allusers[ID].last}</h2>
                <h3>Age: {this.props.allusers[ID].age}</h3>
                <h3>Description: {this.props.allusers[ID].description}</h3>
                <i className={ ( this.props.favUsers!=null && this.props.favUsers.includes(ID+1))? "fa fa-heart" : "fa fa-heart-o" } aria-hidden="true" onClick={ () => this.props.favUser(this.props.allusers[ID]) }></i>
                <hr/>
                <Link to={"/userList"}>Go to the list of users</Link>
            </div>
        );
    }
}

// "state.activeUser", "state.users", "state.favUsers" are set in reducers/index.js
function mapStateToProps(state) {
    return {
        userId: state.activeUser,
        allusers: state.users,
        favUsers: state.favUsers
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({favUser: favUser}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);