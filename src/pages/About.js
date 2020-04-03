import React from 'react';

import CommonFrame from '../components/CommonFrame';

import Typography from '@material-ui/core/Typography';

const About = props => {
  const { currentUser, mailCount } = props;

  return (
    <CommonFrame currentUser={currentUser} mailCount={mailCount}>
      <Typography variant="h6" component="h2">
        About
      </Typography>
    </CommonFrame>
  );
};

export default About;
