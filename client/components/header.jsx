import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header col-12">
        <div className="row align-items-center">
          <div className="col-10 headerTitle">
            Wicked Sales
          </div>
          <div className="col float-right offset-xs-10 mt-2 shoppingCart">
            <button className="btn btn-success">
              <i className="cartIcon fas fa-shopping-cart fa-2x"></i>
              <span className="cartBadge badge badge-light">{this.props.cartItemCount}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
