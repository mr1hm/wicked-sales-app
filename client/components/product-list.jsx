import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(productList => this.setState({
        products: productList
      }))
      .catch(error => console.error(error.message));
  }

  render() {
    return (
      <div className="productList row">
        {this.state.products.map(product =>
          <ProductListItem
            key={product.id}
            productId={product.id}
            productImg={product.image}
            productInfo={product.shortDescription}
            productName={product.name}
            productPrice={product.price}
            setViewPass={this.props.setView} />
        )}
      </div>
    );
  }
}
