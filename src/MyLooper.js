import React from 'react';
import MyJssInput from './MyJssInput';
//import MyJssInput from './MyInput';

const buildInputs = (max) => {
  const arr = [];
  for(let i = 0; i < max; i++) {
    arr.push(<MyJssInput key={i} value={i}/>);
  }
  return arr;
};

const MyLooper = ({childrenNumber}) => {
  const inputs = buildInputs(childrenNumber);
  return <>{inputs}</>;
};

export default MyLooper;
