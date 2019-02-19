import React from 'react';
import './product.css';
import { Product } from './types';
import { inject } from 'mobx-react';
import Cart from '../../stores/cart';
import { toster } from '../../setup/util'

interface ProductProps {
	product: Product;
	cart?: Cart;
}

interface ProductState {
	amount: number;
}

@inject('cart')
export default class ProductComponent extends React.Component<ProductProps, ProductState> {
	constructor(props: ProductProps) {
		super(props);
		this.state = {
			amount: 1
		};
	}

	handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		let amount = Number.parseInt(e.target.value);

		this.setState({
			amount
		});
	};

	handleAddToCart = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		let { cart, product } = this.props;
		cart!.add(product, this.state.amount);
		toster.succ('Product added to cart successfully!')
	};

	render() {
		let { product } = this.props;

		return (
			<div className="product" data-toggle="tooltip" data-placement="top" title={product.description}>
				<div className="product-img-wrap">
					<img
						className="img-responsive product-img"
						src={product.image}
					/>
				</div>
				<div className="product-name">
					{product.name}
				</div>
				<div className="product-price">
					Price: {product.price}$
				</div>
				<div className="product-input">
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">Amount</span>
						</div>
						<input
							className="form-control"
							type="number"
							value={this.state.amount}
							onChange={this.handleAmountChange}
						/>
						<div className="input-group-append">
							<button className="btn btn-primary" onClick={this.handleAddToCart}>
								🛒
							</button>
						</div>
					</div>
				</div>
			</div >
		);
	}
}
