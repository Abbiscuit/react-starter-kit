import React from 'react';
import Header from './Header';

const CommonFrame = props => {
  const { currentUser, mailCount } = props;
  return (
    <React.Fragment>
      <Header mailCount={mailCount} currentUser={currentUser} />
      {props.children}
    </React.Fragment>
  );
};

export default CommonFrame;
