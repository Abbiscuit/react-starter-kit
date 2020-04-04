import React, { useState } from 'react';
import CommonFrame from '../components/CommonFrame';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { makeStyles } from '@material-ui/core';
import OptionButton from '../components/OptionButton';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const Login = props => {
  const classes = useStyles();
  const { currentUser, mailCount, history } = props;
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    console.log(credentials);

    reset();
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const reset = () => setCredentials({ email: '', password: '' });

  return (
    <CommonFrame currentUser={currentUser} mailCount={mailCount}>
      <Paper className={classes.paper}>
        <Typography variant="h6" component="h1" gutterBottom>
          Login
        </Typography>
        <form name="form" onSubmit={handleSubmit} autoComplete="off">
          <FormControl fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              onChange={handleChange}
              fullWidth
              aria-describedby="component-error-email-text"
              value={credentials.email}
              required
            />
            <FormHelperText
              error
              id="component-error-email-text"
            ></FormHelperText>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              onChange={handleChange}
              aria-describedby="component-error-password-text"
              value={credentials.password}
              required
            />
            <FormHelperText
              error
              id="component-error-password-text"
            ></FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <Button type="submit">Login</Button>
          </FormControl>
        </form>

        <OptionButton onClick={() => history.push('/signup')}>
          Don't have an account?
        </OptionButton>
      </Paper>
    </CommonFrame>
  );
};

export default Login;
