import React from 'react';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import MailItem from './MailItem';

const MailList = props => {
  const { mail } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Inbox
      </Typography>
      <List>
        {mail.map(mail => (
          <MailItem key={mail.id} mail={mail} />
        ))}
      </List>
    </React.Fragment>
  );
};

export default MailList;
