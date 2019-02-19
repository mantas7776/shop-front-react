import React from 'react'
import { Product } from './types';
import ProductComponent from './product';
// user prop-types 
// and default prop-types =]
interface ShopProps {
    products: Product[];
}

export default class Checkout extends React.Component<ShopProps, {} {
    render() {
        
        const { products } = this.props;

        return (
            <div id="checkout-wrapper">
                <div id="checkout-info">

                </div>
                <div id="checkout-goods">
                    products.map(product => {
                        return <ProductComponent key={product.id} product={product}/>
                    })
                </div>
            </div>
        )
    }
}