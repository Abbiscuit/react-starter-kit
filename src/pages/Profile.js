import React from 'react';

import CommonFrame from '../components/CommonFrame';
import FriendsList from '../components/FriendsList';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Profile = props => {
  const { currentUser, mailCount, friends } = props;
  const username = currentUser ? currentUser : 'あなた';
  console.log('Profile:', props);
  return (
    <CommonFrame currentUser={currentUser} mailCount={mailCount}>
      <Grid container style={{ padding: 10 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" gutterBottom>
            Profile
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Status
          </Typography>
          <List disablePadding>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText
                primary={`Name: ${username}`}
                secondary={'hiroshi@gmail.com'}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <FriendsList friends={friends} />
        </Grid>
      </Grid>
    </CommonFrame>
  );
};

export default Profile;
