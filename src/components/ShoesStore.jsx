import React, { Component } from 'react'
import products from './data.json'
import ProductList from './ProductList'
import Modal from './Modal'
import Cart from './Cart'

export default class ShoesStore extends Component {
    state = {
        shoesDetail:null,
        showModal:false,
        showCart:false,
        cart:[],
    }
    setStateModal = (product) => {
        this.setState({shoesDetail:product,showModal:true});
    }
    closeModal = () => {
        this.setState({showModal:false,});
    }
    closeCart = () => {
        this.setState({showCart:false,});
    }
    addToCart = (product) => {
        let listItem = this.state.cart.map((item) => item.name );
        if (!listItem.includes(product)) {
          let itemCart = { name: product, quantity: 1 };
          this.setState({ cart: [...this.state.cart, itemCart] });
        } else {
            let foundItem = this.state.cart.find((Element) => Element.name.id === product.id);
            foundItem.quantity = foundItem.quantity + 1;
            this.setState({ cart: [...this.state.cart] });
        }
    }
    getAmount = () => {
        let count = 0;
        for (let item of this.state.cart) {
            count += item.quantity;
        }
        return count;
    }
  render() {
    return (
      <div className='container'>
        <button className='btn btn-success my-3' onClick= {() => {this.setState({showCart:true})}}><i class="fa fa-shopping-cart"></i> My cart{(this.state.cart.length >0)?`(${this.getAmount()})`:''}</button>
        <ProductList productsData={products} setStateModal={this.setStateModal} onAddToCart = {this.addToCart}/>
        {this.state.shoesDetail && <Modal  content={this.state.shoesDetail} show={this.state.showModal} onClose = {this.closeModal} onAddToCart = {this.addToCart}/>}
        <Cart show={this.state.showCart} onClose = {this.closeCart} dataCart = {this.state.cart}/>
      </div>
    )
  }
}
