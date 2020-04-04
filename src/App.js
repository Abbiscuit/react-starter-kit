import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import MailBox from './pages/MailBox';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';

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
    setCurrentUser(null);
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
        <Route
          exact
          path="/login"
          render={props =>
            currentUser ? <Redirect to="/" /> : <Login {...props} {...params} />
          }
        />
        <Route
          exact
          path="/signup"
          render={props =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <Signup {...props} {...params} />
            )
          }
        />
        <Route render={props => <NotFound {...props} {...params} />} />
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
