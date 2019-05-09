import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Friendslist = props => {
    return (
        <div className="friends-container">
            {props.friends.map(friend) => {
                return <Friend key={friend.id} friend = {friend} name={friend.name} age={friend.age} email={friend.email} />}
            }
        </div>
    )
}

Friendslist.propTypes = {
    friend: PropTypes.array,
    key: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
    };  

export default Friendslist;
