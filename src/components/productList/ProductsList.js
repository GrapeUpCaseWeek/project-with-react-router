import React, { Component } from 'react';
import ProductListItem from '../productListItem/ProductListItem';
import { fruitsAndVegetables } from '../../mocks/mock';

import './productList.css';

class ProductsList extends Component {
    getProduct = product =>  (
        <ProductListItem key={product.id} {...product} />
    );

    render () {
        const productItems = fruitsAndVegetables.map(product => this.getProduct(product));
        return (
            <ul className="product-list">
                { productItems }
            </ul>
        );
    }
}

export default ProductsList;
