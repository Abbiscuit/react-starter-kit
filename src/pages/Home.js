import React from 'react';
import CommonFrame from '../components/CommonFrame';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const Home = props => {
  const { currentUser, mailCount } = props;
  const classes = useStyles();
  return (
    <CommonFrame currentUser={currentUser} mailCount={mailCount}>
      <Paper className={classes.paper}>
        <Typography variant="h6" component="h1" gutterBottom>
          Home
        </Typography>
      </Paper>
    </CommonFrame>
  );
};

export default Home;
