import * as React from 'react';
import './../assets/scss/App.scss';
import AppBar from 'material-ui/AppBar';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import {lightGreen, yellow, red, grey} from 'material-ui/colors';
import {MuiThemeProvider} from 'material-ui';
import Header from './Header';
import Content from './Content';

const theme = createMuiTheme(
  {
    palette: {
      primary  : lightGreen,
      secondary: yellow,
      error    : red
    }
  });

export default class App extends React.Component<any, undefined> {
  render() {
    return (
      <div className="app">
        <MuiThemeProvider theme={theme}>
          <Header/>
          <Content/>
        </MuiThemeProvider>
      </div>
    );
  }
}

