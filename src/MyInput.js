import React from 'react';
import PropTypes from 'prop-types';

const MyJssInput = (props) => {
  const {value} = props;
  return <input className="myInput" value={`Input with Style ${value}`}/>;
};

MyJssInput.propTypes = {
  value: PropTypes.any
};

export default MyJssInput;
