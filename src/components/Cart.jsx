import React, { Component } from 'react'

export default class Cart extends Component {
    getAmount = (cart) => {
        let amount = 0;
        for (let shoes of cart) {
            amount += shoes.name.price * shoes.quantity;
        }
        return amount;
    }
  render() {
    const {show, onClose, dataCart} = this.props;
    return (
      <div>
        <div
          className="modal"
          tabIndex={-1}
          style={{ display: show === true ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">MY CART</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    onClose();
                  }}
                  aria-label="Close"
                />
              </div>
              <div classname="modal-body">
                <table className="table table-bordered table-hover myTable">
                  <thead className='text-primary'>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataCart.map((item,index) => {
                        return <tr key={index}>
                        <td>{item.name.id}</td>
                        <td>{item.name.name}</td>
                        <td>{item.name.price}</td>
                        <td>{item.quantity}</td>
                    </tr>
                    })}
                    {/* <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> */}
                  </tbody>
                </table>
                <p className='text-end pe-3'>Payment : {this.getAmount(dataCart)}$</p>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    onClose();
                  }}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
