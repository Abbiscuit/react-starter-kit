import React from 'react';

import List from '@material-ui/core/List';

import FriendsItem from './FriendsItem';

const FriendsList = props => {
  const { friends } = props;
  return (
    <List>
      {friends.map(friend => (
        <FriendsItem key={friend.id} friend={friend} />
      ))}
    </List>
  );
};

export default FriendsList;
