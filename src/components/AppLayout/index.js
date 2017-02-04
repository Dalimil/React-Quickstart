import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from './logo.svg';
import './style.css';


/* Wrapper to avoid activeClassName repetition */
const NavLink = (props) => (
	<Link {...props} activeClassName="active" onlyActiveOnIndex={true} />
);

const Nav = (props) => (
	<div>
		Navigation:&nbsp;
		<NavLink to='/'>Home</NavLink>&nbsp;
		<NavLink to='/about'>About</NavLink>&nbsp;
		<NavLink to='/inbox'>Inbox</NavLink>&nbsp;
		<NavLink to='/inbox/message/Alice/msg-34'>Inbox-Message</NavLink>&nbsp;
	</div>
);


class AppLayout extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Nav />
		      {this.props.children} {/* This will be one Route at a time */}
        </div>
      </div>
    );
  }
}

export default AppLayout;
