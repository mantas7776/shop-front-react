import React, { Component } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './chat.css';
//#4e8cff
class App extends Component {
	componentDidMount() {
		addResponseMessage(
			'Hello. If you have any questions regarding our products do not hesitate to ask and we will help you!'
		);
	}

	render() {
		return (
			<div className="Chat">
				<Widget title="Customer support" subtitle="Expected response time: 5 minutes" />
			</div>
		);
	}
}

export default App;
