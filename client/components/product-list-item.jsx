import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="col-4 mt-4 cardDiv">
        <div className="card h-100">
          <img src={this.props.productImg} alt="image" className="cardImage card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.productName}</h5>
            <p className="card-text">{this.props.productInfo}</p>
          </div>
        </div>
      </div>
    );
  }
}
