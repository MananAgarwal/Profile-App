import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {favUser} from '../actions/favUser'

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    //static heartState
    render() {
        if (!this.props.userId) {
            return (<div>Select a user...</div>);
        }
        var ID = this.props.userId-1;
        // if (this.props.user.favouritised) {
        //     heartState = "fa fa-heart";
        // }
        // else {
        //     heartState = "fa fa-heart-o";
        // } 
        
        console.log("allusers from userDetails " + this.props.allusers);
        console.log("selected user array number" + ID);

        // console.log(" testing " + this.props.allusers[ID].first);
        return (
            <div>
                <img src={this.props.allusers[ID].thumbnail} />
                <h2>{this.props.allusers[ID].first} {this.props.allusers[ID].last}</h2>
                <h3>Age: {this.props.allusers[ID].age}</h3>
                <h3>Description: {this.props.allusers[ID].description}</h3>
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        userId: state.activeUser,
        allusers: state.users
    };
}

// function matchDispatchToProps(dispatch){
//     return bindActionCreators({favUser: favUser}, dispatch);
// }
// export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);
export default connect(mapStateToProps)(UserDetail);