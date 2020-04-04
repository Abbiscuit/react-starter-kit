import React from 'react';
import HeaderDrawer from './HeaderDrawer';

const CommonFrame = props => {
  const { currentUser, mailCount } = props;
  return (
    <React.Fragment>
      <HeaderDrawer mailCount={mailCount} currentUser={currentUser} />
      {props.children}
    </React.Fragment>
  );
};

export default CommonFrame;
