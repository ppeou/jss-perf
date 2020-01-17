
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
    margin: '5px'
  }
};

const MyJssInput = (props) => {
  const {classes, value} = props;
  return <input className={classes.root} value={`Input with Style ${value}`}/>;
};

MyJssInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyJssInput);
