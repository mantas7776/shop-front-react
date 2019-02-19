import React from 'react';
import CheckoutProduct from './checkoutProduct';
import { inject, observer } from 'mobx-react';
import Cart from '../../stores/cart';
import './checkout.css';
import { toster } from '../../setup/util';

interface ShopProps {
	cart?: Cart;
}

@inject('cart')
@observer
export default class Checkout extends React.Component<ShopProps, {}> {

	handleCheckout = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		let cart = this.props.cart!;
		if (cart.cart.length == 0) {
			toster.err('Your cart is empty');
			return;
		}
		cart.cleanCart();
		toster.succ('Successfully bought!');
	}

	render() {
		const { cart } = this.props;

		return (
			<div className="container">
				<div id="checkout-wrapper">
					<div id="checkout-header">
						<h2>Your cart</h2>
					</div>
					<div id="checkout-table" className="clearfix">
						<div id="checkout-table-header" className="clearfix">
							<div></div>
							<div>Name</div>
							<div>Price</div>
							<div>Amount</div>
							<div>Action</div>
						</div>
						<div id="checkout-table-goods">
							{cart!.cart.map(product => (
								<CheckoutProduct key={product.id} product={product} />
							))}
						</div>
					</div>
					<div id="checkout-footer" className="clearfix">
						<span id="checkout-sum-wrap">Total: ${cart!.total.toFixed(2)}</span>
						<button type="button" className="float-right btn btn-success" onClick={this.handleCheckout}>
							Checkout
						</button>
					</div>
				</div>
			</div>
		);
	}
}
