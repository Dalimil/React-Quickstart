import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import './index.css';
import AppLayout from './components/AppLayout';

const Demos = {
	Home: () => <div>--Home Component--</div>,
	About: () => <div>--About Component--</div>,
	NotFound: () => <h1>404.. This page is not found!</h1>,
	Inbox: (props) => (<div><h2>Inbox</h2> {props.children} </div>),
	InboxHome: () => <div>Inbox Home</div>,
	Message: (props) => <div>Msg for {props.params.user}: {props.params.msgId}</div>
};

class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			user: null
		};
  }

  isLoggedIn() {
		return this.state.user != null;
  }

	render() {
		return (
			<Router history={hashHistory} >
				<Route path="/" component={AppLayout}>

					<IndexRoute component={Demos.Home} />
					<Route path="about" component={Demos.About} />
					<Route path="inbox" component={Demos.Inbox}>
						{/* Wrapper could omit the path if it just extends the UI
							* - in that case IndexRoute would not exist */}
						<IndexRoute component={Demos.InboxHome} />
						<Route path="message/:user/:msgId" component={Demos.Message} />
						{/* path could also be just ':id' */}
						{/* use onEnter={myCheckLoggedInFunction} for authorization */}
					</Route>
					<Route path='*' component={Demos.NotFound} />

				</Route>
			</Router>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
