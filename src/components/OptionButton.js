import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  span: {
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
    margin: '0 auto',
    cursor: 'pointer',
    color: '#666',
    textDecoration: 'underline'
  }
}));

const OptionButton = props => {
  const classes = useStyles();

  const { children, onClick } = props;

  return (
    <div className={classes.span} onClick={onClick}>
      {children}
    </div>
  );
};

export default OptionButton;
