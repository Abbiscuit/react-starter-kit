import { createMuiTheme } from '@material-ui/core';

import teal from '@material-ui/core/colors/teal';
import pink from '@material-ui/core/colors/pink';

export default createMuiTheme({
  typography: {
    useNextVarians: true
  },
  palette: {
    primary: teal,
    secondary: pink
  }
});
