import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainIntro from './components/MainIntro';
import Background from './components/Background';
import Skill from './components/Skill';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MainIntro />
        <Background />
        <Skill />
      </MuiThemeProvider>
    );
  }
}

export default App;
