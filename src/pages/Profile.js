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
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  paper: {
    padding: 10,
    marginBottom: 10
  }
}));

const Profile = props => {
  const { currentUser, mailCount, friends } = props;
  const username = currentUser ? currentUser : 'あなた';
  const classes = useStyles();
  return (
    <CommonFrame currentUser={currentUser} mailCount={mailCount}>
      <Grid container style={{ padding: 10 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" gutterBottom>
            Profile
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
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
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <FriendsList friends={friends} />
          </Paper>
        </Grid>
      </Grid>
    </CommonFrame>
  );
};

export default Profile;
