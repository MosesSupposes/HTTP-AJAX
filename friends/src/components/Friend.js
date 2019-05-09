import React from 'react';
import PropTypes from 'prop-types';

const Friend = props => {
    return (
      <div className="friend-card">
          <div className="name"><h3>Name:</h3> {props.name}</div>
          <div className="age"><h3>Age:</h3> {props.age}</div>
          <div className="email"><h3>Email:</h3> {props.email}</div>
      </div>
    );
  };
  

  
  

  Friend.propTypes = {
    friend: PropTypes.object,
    key: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
    };  
  
  export default Friend;
  