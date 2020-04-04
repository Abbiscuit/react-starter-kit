import React from 'react';

import CommonFrame from '../components/CommonFrame';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const MailBox = props => {
  console.log(props);
  const { mailCount, currentUser } = props;
  return (
    <CommonFrame currentUser={currentUser} mailCount={mailCount}>
      <Grid container style={{ padding: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2">
            MailBox
          </Typography>
        </Grid>
      </Grid>
    </CommonFrame>
  );
};

export default MailBox;
