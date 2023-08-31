import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {item,setStateModal,onAddToCart} = this.props;
    //console.log(this.props);
    return (
      <div className="col-4">
        <div className="card">
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.shortDescription}</p>
            <p className="card-text">{item.price}$$</p>
            <div className='d-flex justify-content-between px-1'>
              <button
                className="btn btn-primary"
                onClick={() => setStateModal(item)}
              >
                Detail
              </button>
              <button
                className="btn btn-warning"
                onClick={() => onAddToCart(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
