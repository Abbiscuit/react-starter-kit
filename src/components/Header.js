import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';

const Header = props => {
  const { mailCount } = props;
  const [drawer, setDrawer] = useState(false);

  const handleMenu = event => {
    setDrawer(true);
  };
  const handleClose = () => {
    setDrawer(false);
  };
  const logout = event => {
    console.log('logout');
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="primary" style={{ marginBottom: 10 }}>
        <Toolbar>
          <IconButton
            onClick={handleMenu}
            color="inherit"
            component={Link}
            to="/"
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ flexGrow: 1 }}>ContextMaterial</Typography>
          <Button color="inherit">Login</Button>
          <IconButton color="inherit" component={Link} to="/mailbox">
            <Badge badgeContent={mailCount} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" component={Link} to="/profile">
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={drawer} onClose={handleClose}>
        <List>
          <ListItem button>
            <ListItemText primary="hlj;jaskdj" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Header;
