import React from 'react';
import PropTypes from 'prop-types';

const Friend = props => {
    return (
      <div className="friend-card">
          <h3>Name:</h3> {props.name}
          <h3>Age:</h3> {props.age}
          <h3>Email:</h3> {props.email}
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
  