
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'black',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    color: 'white',
    padding: '5px 10px',
    margin: '5px',
    '&[readonly]': {
      backgroundColor: 'red',
      color: 'yellow'
    },
    '&[disabled]': {
      backgroundColor: 'blue',
      color: 'black'
    }
  }
};

const MyJssInput = (props) => {
  const {classes, value} = props;
  const prop = {value};
  if(value % 2 === 0) {prop.readOnly=true;}
  if(value % 3 === 0) {prop.disabled=true;}
  return <input className={classes.root} {...prop}/>;
};

MyJssInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyJssInput);
