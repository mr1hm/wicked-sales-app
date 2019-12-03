import React from 'react';
import ProductListItem from './product-list-item';

export default class GamingComputers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      computers: null
    };
  }

  render() {
    return (
      <div className="productList row">
        {this.state.products.map(product =>
          <ProductListItem
            key={product.id}
            productId={product.id}
            productImg={product.images}
            productInfo={product.shortDescription}
            productName={product.name}
            productPrice={product.price}
            setViewPass={this.props.setView} />
        )}
      </div>
    );
  }
}
