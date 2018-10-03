import React, { Component, Fragment } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Use from './components/Use';
import Setup from './components/Setup';

import 'sanitize.css';
import './css/styles.min.css';
import logo from './img/comic-slack.png';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <img src={logo} alt="Comic Slack logo" width="50" />
          <div>
            <h1 className="m_t_0 m_b_0">Comic Slack</h1>
          </div>
        </header>

        <div id="compose" className="use-wrap wrapper">
          <Use />
        </div>
        <div id="setup" className="setup-wrap wrapper">
          <Setup />
        </div>
      </Fragment>
    );
  }
}

export default App;
