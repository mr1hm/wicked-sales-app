import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header row">
          <h1>Wicked Sales</h1>
          <div className="cart offset-10">
            <i className="cartIcon fas fa-shopping-cart fa-2x"></i>
          </div>
        </div>
      </>
    );
  }
}
