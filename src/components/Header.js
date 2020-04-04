import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const Header = props => {
  const { currentUser } = props;
  return (
    <React.Fragment>
      <AppBar position="static" color="primary" style={{ marginBottom: 10 }}>
        <Toolbar>
          <Typography style={{ flexGrow: 1 }}>react-starter-kit</Typography>

          {currentUser ? (
            <IconButton color="inherit" component={Link} to="/login">
              <HomeIcon />
            </IconButton>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
