import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    let finalPrice = null;
    const price = this.props.cartItemPrice;
    let strPrice = price.toString();
    if (strPrice.indexOf('.') === -1) {
      const priceNum = parseInt(strPrice);
      finalPrice = (priceNum / 100).toFixed(2);
    } else {
      finalPrice = price;
    }
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
                <p className="cartItemPriceTag">{`$${finalPrice}`}</p>
                <p className="card-text">{this.props.cartItemInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
