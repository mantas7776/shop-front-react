import React from 'react';
import Shop from '../components/shop/shop';
import products from './fixtures/products.json';
import { Provider } from 'mobx-react';
import Cart from '../stores/cart';
import { shallow, mount } from 'enzyme';
import { toJS, values } from 'mobx';
import ProductComponent from '../components/shop/product';
import '../setup/setup.tsx';

it('Should match snapshot', () => {
	const shopPage = shallow(<Shop products={products} />);
	console.dir(shopPage);
	expect(shopPage).toMatchSnapshot();
});

it('Should render product properly', () => {
	const cart = new Cart();
	const productElement = shallow(
		<Provider cart={cart}>
			<ProductComponent product={products[0]} />
		</Provider>
	);
	expect(productElement).toMatchSnapshot();
});

it('Should add to cart successfully', () => {
	const cart = new Cart();
	const productElement = mount(
		<Provider cart={cart}>
			<ProductComponent product={products[0]} />
		</Provider>
	);
	productElement.find('input').simulate('change', { target: { value: 2 } });
	productElement.find('button').simulate('click');

	expect(cart.cart[0].amount).toBe(2);
});

it('Should add product to cart', () => {
	const cart = new Cart();
	expect(cart.cart.length).toBe(0);

	cart.add(products[0], 1);
	const cartObj = toJS(cart.cart[0]);
	expect(cartObj).toEqual({ ...products[0], amount: 1 });
	expect(cartObj.amount).toBe(1);
	expect(cart.cart.length).toBe(1);
});

it('Should clean cart', () => {
	const cart = new Cart();
	expect(cart.cart.length).toBe(0);

	cart.add(products[0], 1);
	expect(cart.cart.length).toBe(1);

	cart.cleanCart();
	expect(cart.cart.length).toBe(0);
});

it('Should add same product to cart', () => {
	const cart = new Cart();
	expect(cart.cart.length).toBe(0);

	cart.add(products[0], 1);
	cart.add(products[0], 1);
	const cartObj = toJS(cart.cart[0]);
	expect(cartObj).toEqual({ ...products[0], amount: 2 });
	expect(cartObj.amount).toBe(2);
	expect(cart.cart.length).toBe(1);
});

it('Should remove product from cart', () => {
	const cart = new Cart();
	cart.add(products[0], 1);

	cart.remove(products[0]);
	expect(cart.cart.length).toBe(0);
});

it('Should remove nothing from cart', () => {
	const cart = new Cart();

	expect(cart.cart.length).toBe(0);
	cart.remove(products[0]);
	expect(cart.cart.length).toBe(0);
});

it('Should correctly calculate total', () => {
	const cart = new Cart();
	const amount = 3;
	let product = products[0];
	let total = product.price * 3;
	cart.add(product, 3);
	expect(cart.total).toBe(total);
});
