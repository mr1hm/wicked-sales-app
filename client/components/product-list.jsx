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
    this.getFeaturedProducts();
  }

  getFeaturedProducts() {
    const body = { featured: 1 };
    const init = { method: 'POST', body: JSON.stringify(body) };
    fetch('api/products.php', init)
      .then(res => res.json())
      .then(products => {
        this.setState({
          products
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="productList row">
        {this.state.products.map(product =>
          <ProductListItem
            key={product.id}
            productId={product.id}
            productMainImg={product.mainImage}
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
