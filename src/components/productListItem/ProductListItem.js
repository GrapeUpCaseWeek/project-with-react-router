import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './productListItem.css';

class ProductListItem extends Component {
  openProductDetails = () => {
    this.props.history.push(`/productDetails/${this.props.id}`);
  }

  render() {
    const { img, name, price } = this.props;
    return (
      <li className="product-list-item" onClick={this.openProductDetails}>
        <div className="product-list-item__image-wrapper">
          <img className="product-list-item__image" src={img} />
        </div>
        <div className="product-list-item__element">{name}</div>
        <div className="product-list-item__element">$ {price}</div>
      </li>
    );
  }
}

export default withRouter(ProductListItem);
