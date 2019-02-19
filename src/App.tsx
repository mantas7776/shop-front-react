import './App.css';

import Navigation from './components/navigation/navigation';
import React, { Component } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import Shop from './components/shop/shop';
import Header from './components/header/header';
import { Provider } from 'mobx-react';
import Cart from './stores/cart';
import Chat from './components/chat/chat';

$(function () {
	($('body') as any).tooltip({
		selector: '[data-toggle="tooltip"]'
	})
})

class App extends React.Component {
	private cart = new Cart();

	render() {
		return (
			<BrowserRouter>
				<Provider cart={this.cart}>
					<div>
						<div className="OnlineStore">
							<Header />
							<Navigation />
						</div>
						<Chat />
					</div>
				</Provider>
			</BrowserRouter>
		);
	}
}

export default App;
