import React from 'react';
import PropTypes from 'prop-types';

const MyJssInput = (props) => {
  const {value} = props;
  const prop = {value};
  if(value % 2 === 0) {prop.readOnly=true;}
  if(value % 3 === 0) {prop.disabled=true;}
  return <input className="myInput" {...prop}/>;
};

MyJssInput.propTypes = {
  value: PropTypes.any
};

export default MyJssInput;
