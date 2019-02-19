import React from 'react';
import { shallow, mount } from 'enzyme';
import CheckoutProduct from '../components/checkout/checkoutProduct';
import products from './fixtures/products.json';
import '../setup/setup';
import Cart from '../stores/cart';
import Checkout from '../components/checkout/checkout';
import { Provider } from 'mobx-react';

it('Should render checkout product', () => {
	const cart = new Cart();
	const checkoutProduct = mount(<CheckoutProduct product={{ ...products[0], amount: 1 }} cart={cart} />);
	expect(checkoutProduct).toMatchSnapshot();
});

it('Should click remove button and remove product', () => {
	const cart = new Cart();
	const checkoutProduct = mount(<CheckoutProduct product={{ ...products[0], amount: 1 }} cart={cart} />);
	checkoutProduct.find('button').simulate('click');
	expect(cart.cart.length).toBe(0);
});

it('Should render checkout products', () => {
	const cart = new Cart();
	cart.add(products[0], 5);
	cart.add(products[1], 1);
	const checkout = mount(
		<Provider cart={cart}>
			<Checkout />
		</Provider>
	);
	expect(cart.cart.length).toBe(2);
	expect(checkout).toMatchSnapshot();
});

it('Should buy items', () => {
	const cart = new Cart();
	cart.add(products[0], 5);
	cart.add(products[1], 1);
	const checkout = mount(
		<Provider cart={cart}>
			<Checkout />
		</Provider>
	);
	expect(cart.cart.length).toBe(2);

	checkout
		.find('#checkout-footer')
		.find('button')
		.simulate('click');

	expect(cart.cart.length).toBe(0);
});

it('Should buy items on empty cart', () => {
	const cart = new Cart();
	const checkout = mount(
		<Provider cart={cart}>
			<Checkout />
		</Provider>
	);
	expect(cart.cart.length).toBe(0);

	checkout
		.find('#checkout-footer')
		.find('button')
		.simulate('click');

	expect(cart.cart.length).toBe(0);
});
