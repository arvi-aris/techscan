import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TechScanHome from './components/techScanHome.js'
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();
class App extends React.Component {
  render() {
    return (
        <MuiThemeProvider>
            <TechScanHome/>
        </MuiThemeProvider>
    );
  }
}

export default App;
