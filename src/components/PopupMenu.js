import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import SettingsIcon from '@material-ui/icons/Settings';

const PopupMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = e => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={handleMenuClose}
          button
          component={Link}
          to="/profile"
        >
          プロフィール
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          button
          component={Link}
          to="/account-setting"
        >
          アカウント設定
        </MenuItem>
      </Menu>
    </>
  );
};

export default PopupMenu;
