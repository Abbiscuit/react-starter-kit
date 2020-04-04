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

const About = props => {
  const { currentUser } = props;
  const classes = useStyles();

  const content = (
    <Paper className={classes.paper}>
      <Typography variant="h6" component="h1" gutterBottom>
        {'Your Content comes here.'}
      </Typography>
    </Paper>
  );

  const welcome = (
    <Paper className={classes.paper}>
      <Typography variant="h6" component="h1" gutterBottom>
        {'Welcome to React Starter Kit'}
      </Typography>
    </Paper>
  );

  return (
    <CommonFrame {...props}>{currentUser ? content : welcome}</CommonFrame>
  );
};

export default About;
