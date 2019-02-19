import React from 'react'
import { Product } from './types';
import ProductComponent from './product';

interface ShopProps {
    products: Product[];
}


const Shop: React.FunctionComponent<ShopProps> = (props : ShopProps) => {
    const { products } = props;

    return (
        <div className="container">
            <div id="product-list">
            { products.map(product => 
                <ProductComponent key={product.id} product={product} />
            )}
            </div>
        </div>
    )
}

export default Shop;