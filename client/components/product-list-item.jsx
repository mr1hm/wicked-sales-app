import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card col-4">
        <img src={this.props.productImg} alt="image" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{this.props.productName}</h5>
          <p className="card-text">{this.props.productInfo}</p>
          <a href='#' className="btn btn-primary">Product Link</a>
        </div>
      </div>
    );
  }
}
