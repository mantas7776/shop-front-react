import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Navigation from '../components/navigation/navigation';
import { reaction } from 'mobx';
import '../setup/setup';
import Cart from '../stores/cart';
import { Provider } from 'mobx-react';
import Checkout from '../components/checkout/checkout';
import Header from '../components/header/header';
import CheckoutButton from '../components/header/checkoutButton';

it('Should render /checkout page', () => {
	const cart = new Cart();
	const checkoutPage = mount(
		<Provider cart={cart}>
			<MemoryRouter initialEntries={['/checkout']}>
				<Navigation />
			</MemoryRouter>
		</Provider>
	);
	expect(checkoutPage.find(Checkout).length).toBe(1);
});

it('Should render active cart button on /checkout', () => {
	const checkoutPage = mount(
		<MemoryRouter initialEntries={['/checkout']}>
			<CheckoutButton />
		</MemoryRouter>
	);
	expect(checkoutPage.find('.checkout-active').length).toBe(2);
});

it('Should render active cart button on /', () => {
	const checkoutPage = mount(
		<MemoryRouter initialEntries={['/']}>
			<CheckoutButton />
		</MemoryRouter>
	);
	expect(checkoutPage.find('.checkout-active').length).toBe(0);
});
