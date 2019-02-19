import { CartProduct, Product } from '../components/shop/types';
import { observable, computed, IObservableArray } from 'mobx';

export default class Cart {
	@observable
	private products: IObservableArray<CartProduct> = observable([]);

	add(product: Product, amount: number) {
		let index = this.products.findIndex(searched => {
			return searched.id == product.id;
		});

		if (index != -1) {
			let cartProd = this.products[index];
			this.products[index] = Object.assign({}, cartProd, { amount: cartProd.amount + amount });
		} else {
			let newProduct = Object.assign({}, product, { amount: amount });
			this.products.push(newProduct);
		}
	}

	remove(product: Product) {
		let removed = this.products.filter(({ id }) => id != product.id);
		this.products.replace(removed);
	}

	@computed
	get cart() {
		return this.products.slice();
	}

	@computed
	get total() {
		return this.products.reduce((total, product) => {
			total += product.price * product.amount;
			return total;
		}, 0.0);
	}

	cleanCart = () => {
		this.products.clear();
	};
}
