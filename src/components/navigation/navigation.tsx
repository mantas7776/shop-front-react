import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from '../shop/shop';
import { products } from '../../products';
import Checkout from '../checkout/checkout';

const Navigation: React.FunctionComponent = () => {
	return (
		<Switch>
			<Route exact path="/" render={() => <Shop products={products} />} />
			<Route path="/checkout" render={() => <Checkout />} />
		</Switch>
	);
};

export default Navigation;
