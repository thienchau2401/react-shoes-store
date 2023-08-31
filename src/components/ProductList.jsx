import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
    let {productsData} = this.props;
    return (
      <div className='row gy-5'>
        {productsData.map((product, index) => (<ProductItem key={index} item={product} setStateModal = {this.props.setStateModal} onAddToCart = {this.props.onAddToCart}></ProductItem>))};
      </div>
    );
  }
}
