import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const MailItem = props => {
  const { mail } = props;
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start" button>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography noWrap>{mail.content}</Typography>
            </React.Fragment>
          }
          secondary="asdf"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default MailItem;
