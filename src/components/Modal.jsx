import React, { Component } from 'react'

export default class Modal extends Component {
    
  render() {
    let {content,show, onClose,onAddToCart} = this.props;
    //console.log(content);
    return (
      <div
        className="modal"
        tabIndex={-1}
        style={{ display: show === true ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{content.name}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => onClose()}
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center">
              <img src={content.image} className="w-50" alt=""></img>
              <p>{content.description}</p>
              <div className='d-flex justify-content-between'>
                <p>Quantity :{content.quantity}</p>
                <p>Price :{content.price}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onClose()}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={() => onAddToCart(content)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
