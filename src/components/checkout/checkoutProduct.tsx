import React from 'react';
import { CartProduct } from '../shop/types';
import ProductComponent from '../shop/product';
import { propTypes, inject } from 'mobx-react';
import Cart from '../../stores/cart';
import { toster } from '../../setup/util';

interface CheckoutProductProps {
	product: CartProduct;
	cart?: Cart;
}

@inject('cart')
export default class CheckoutProduct extends React.Component<CheckoutProductProps, {}> {
	handleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		this.props.cart!.remove(this.props.product);
		toster.succ('Product removed successfully')
	};

	render() {
		(window as any).toster = toster;
		let { product, cart } = this.props!;

		return (
			<div className="checkout-prod clearfix">
				<div className="checkout-image">
					<img className="img-responsive product-img" src={product.image} />
				</div>
				<div className="checkout-name">
					<span className="vert-align">{product.name}</span>
				</div>
				<div className="checkout-price">
					<span className="vert-align">{product.price}€</span>
				</div>
				<div className="checkout-amount">
					<span className="vert-align">{product.amount}</span>
				</div>
				<div className="checkout-actions">
					<button className="btn btn-primary checkout-action vert-align hor-align" onClick={this.handleClick}>
						X
					</button>
				</div>
			</div>
		);
	}
}
