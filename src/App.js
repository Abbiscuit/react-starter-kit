import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import MailBox from './pages/MailBox';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [mail, setMail] = useState([
    { id: 1, content: 'こんにちは！私の名前はトムハンクスです！' },
    { id: 2, content: 'こんにちは！明日からピクニックです！' },
    { id: 3, content: 'こんにちは！楽しいですね！' },
    { id: 4, content: '楽しいことばかりだぜ！！！' }
  ]);
  const [mailCount, setMailCount] = useState(20);
  const [friends, setFriends] = useState([
    { id: 1, text: 'lorem super hellooo', username: 'John' },
    { id: 2, text: 'love love hellooo', username: 'Mike' },
    { id: 3, text: 'wow wow ohhhh', username: 'Lora' }
  ]);

  const params = { currentUser, mailCount, friends, mail };

  useEffect(() => {
    setCurrentUser('Hiroshi');
    setMailCount(mail.length);
  }, [mail.length]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} {...params} />}
        />
        <Route
          exact
          path="/about"
          render={props => <About {...props} {...params} />}
        />
        <Route
          exact
          path="/mailbox"
          render={props => <MailBox {...props} {...params} />}
        />
        <Route
          exact
          path="/profile"
          render={props => <Profile {...props} {...params} />}
        />
        <Route component={NotFound} />
      </Switch>
    </MuiThemeProvider>
  );
}

const NotFound = () => (
  <div>
    <h1>Not Found...</h1>
  </div>
);

export default App;
