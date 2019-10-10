import React from 'react';
import CartSummaryItem from './cartSummaryItem';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.getCartTotal = this.getCartTotal.bind(this);
  }

  getCartTotal() {
    let totalCost = 0;
    for (let i = 0; i < this.props.cartSummary.length; i++) {
      totalCost += this.props.cartSummary[i].price;
    }
    let grandTotal = (totalCost / 100).toFixed(2);
    return `$${grandTotal}`;
  }

  render() {
    if (this.props.cartSummary.length === 0) {
      return (
        <div className="col-12">
          <button className="btn btn-warning backToListBtn mt-2 mb-2" onClick={() => this.props.clickHandler('catalog', {})}>Back To Catalog</button>
          <h1>{this.props.text}</h1>
        </div>
      );
    } else {
      return (
        <>
          <div className="col-12">
            <button className="btn btn-warning backToListBtn mt-2 mb-2" onClick={() => this.props.clickHandler('catalog', {})}>Back To Catalog</button>
          </div>
          <div className="cartList row">
            {this.props.cartSummary.map(cartItem =>
              <CartSummaryItem
                key={cartItem.id}
                cartItemID={cartItem.id}
                cartItemImage={cartItem.image}
                cartItemInfo={cartItem.shortDescription}
                cartItemName={cartItem.name}
                cartItemPrice={cartItem.price}
                setView={this.props.clickHandler} />
            )}
          </div>
          <div className="total-price">
            TOTAL: {this.getCartTotal()}
          </div>
        </>
      );
    }
  }
}
