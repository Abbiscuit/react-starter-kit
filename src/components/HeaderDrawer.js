import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';

import { Link } from 'react-router-dom';

const HeaderDrawer = props => {
  const { mailCount, currentUser } = props;
  const [state, setState] = useState(false);

  const handleOpen = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };

  return (
    <div>
      <AppBar position="static" color="primary" style={{ marginBottom: 10 }}>
        <Toolbar>
          <IconButton color="inherit" onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
          <Typography style={{ flexGrow: 1 }}>react-starter-kit</Typography>

          <IconButton color="inherit" component={Link} to="/mailbox">
            <Badge badgeContent={mailCount} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" component={Link} to="/profile">
            <PersonIcon />
          </IconButton>

          {currentUser ? (
            <Button color="inherit">Logout</Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
          {/* PopupMenu if you need... */}
        </Toolbar>
      </AppBar>

      <Drawer open={state} onClose={handleClose}>
        <Box
          style={{
            width: 300
          }}
          onClick={handleClose}
          onKeyDown={handleClose}
        >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="ホーム" />
            </ListItem>
            <ListItem button component={Link} to="/profile">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="プロフィール" />
            </ListItem>
            <ListItem button component={Link} to="/account-setting">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="アカウント設定" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="このサービスについて" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="ログアウト" />
            </ListItem>
            <Divider />

            <ListItem button component={Link} to="/123">
              <ListItemText primary="Not Found" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default HeaderDrawer;
