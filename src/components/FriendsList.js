import React from 'react';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import FriendsItem from './FriendsItem';

const FriendsList = props => {
  const { friends } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Friends List
      </Typography>
      <List disablePadding>
        {friends.map(friend => (
          <FriendsItem key={friend.id} friend={friend} />
        ))}
      </List>
    </React.Fragment>
  );
};

export default FriendsList;
