import React from 'react';
import Header from '../components/Header';
import OptionButton from '../components/OptionButton';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'center'
  }
}));

const NotFound = props => {
  const { currentUser, history } = props;
  console.log(props);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header currentUser={currentUser} />
      <Paper className={classes.paper}>
        <Typography variant="h6" component="h1" gutterBottom>
          NotFound
        </Typography>
        <OptionButton onClick={() => history.push('/signup')}>
          Don't have an account?
        </OptionButton>
      </Paper>
    </React.Fragment>
  );
};

export default NotFound;
