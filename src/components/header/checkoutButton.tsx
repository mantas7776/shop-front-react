import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const CheckoutActiveButton: React.FunctionComponent = () => {
	return (
		<Link to="/" id="checkout" className="checkout-active">
			<button>🛒</button>
		</Link>
	);
};

const CheckoutInactiveButton: React.FunctionComponent = () => {
	return (
		<Link to="/checkout" id="checkout">
			<button>🛒</button>
		</Link>
	);
};

const CheckoutButton: React.FunctionComponent = () => {
	return (
		<Switch>
			<Route exact path="/" component={CheckoutInactiveButton} />
			<Route path="/checkout" component={CheckoutActiveButton} />
		</Switch>
	);
};

export default CheckoutButton;
