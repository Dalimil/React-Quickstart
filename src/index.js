import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import './index.css';
import { Auth } from './firebase';
import AppLayout from './components/dashboard/AppLayout';

import HomePage from './components/dashboard/pages/Home';
import FormsPage from './components/dashboard/pages/Forms';
import AlertsPage from './components/dashboard/pages/Alerts';
import PanelsPage from './components/dashboard/pages/Panels';

import RegisterPage from './components/landing/pages/Register';
import LoginPage from './components/landing/pages/Login';

const Demos = {
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

	componentDidMount() {
		Auth.observeAuthState(user => {
			console.log(user);
			if (user === undefined) {
				// waiting for Auth result
			} else if (user === null) {
				// not authenticated, so auth now
				setTimeout(Auth.authWithGoogle, 10000);
			} else {
				// logged in, so log out for demo puposes
				setTimeout(Auth.signOut, 10000);
			}
		});
	}

	isLoggedIn() {
		return this.state.user != null;
	}

	render() {
		return (
			<Router history={browserHistory} >
				
				<Route path="/login" component={LoginPage} />
				<Route path="/register" component={RegisterPage} />

				<Route path="/" component={AppLayout}>

					<IndexRoute component={HomePage} />
					<Route path="forms" component={FormsPage} />
					<Route path="web-components">
						<IndexRedirect to="panels" />
						<Route path="panels" component={PanelsPage} />
						<Route path="alerts" component={AlertsPage} />
					</Route>

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
