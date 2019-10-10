import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <>
        <div className="col-8 mt-1 mb-3">
          <div className="card">
            <div className="card-horizontal">
              <div className="img-square-wrapper">
                <img className="cartImageDiv" src={this.props.cartItemImage} alt="Card image cap"></img>
              </div>
              <div className="card-body">
                <h4 className="card-title">{this.props.cartItemName}</h4>
                <p className="cartItemPriceTag">{`$${(this.props.cartItemPrice / 100).toFixed(2)}`}</p>
                <p className="card-text">{this.props.cartItemInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
