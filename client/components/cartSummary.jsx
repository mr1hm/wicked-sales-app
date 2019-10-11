import React from 'react';
import CartSummaryItem from './cartSummaryItem';

export default class CartSummary extends React.Component {

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
          <div className="row">
            <div className="total-price col-8">
              TOTAL: {`$${this.props.cartTotal}`}
            </div>
            <div className="col">
              <button className="btn btn-primary p-1 mb-2" onClick={() => this.props.clickHandler('checkout', {})}>Checkout</button>
            </div>
          </div>
        </>
      );
    }
  }
}
