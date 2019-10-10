import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="col-4 mt-4">
        <div className="card h-100 cardDiv">
          <img src={this.props.productImg[1]} alt="image" className="cardImage card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.productName}</h5>
            <p className="productListItem-price">{`$${this.props.productPrice}`}</p>
            <p className="card-text">{this.props.productInfo}</p>
            <button className="btn btn-primary" onClick={() => this.props.setViewPass('details', { id: this.props.productId })}>Product Details</button>
          </div>
        </div>
      </div>
    );
  }
}
