import React from 'react';

import CommonFrame from '../components/CommonFrame';
import FriendsList from '../components/FriendsList';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Profile = props => {
  const { currentUser, mailCount, friends } = props;
  const username = currentUser ? currentUser : 'あなた';
  console.log('Profile:', props);
  return (
    <CommonFrame currentUser={currentUser} mailCount={mailCount}>
      <Grid container style={{ padding: 10 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="h2" gutterBottom>
            {username}の友達リスト
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <FriendsList friends={friends} />
        </Grid>
      </Grid>
    </CommonFrame>
  );
};

export default Profile;
