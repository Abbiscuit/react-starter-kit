import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const FriendsItem = props => {
  const { friend } = props;
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary={friend.text} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default FriendsItem;
