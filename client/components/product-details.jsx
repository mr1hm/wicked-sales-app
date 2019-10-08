import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount(productId) {
    fetch(`api/products.php?id=${productId}`)
      .then(response => response.json())
      .then(productData => this.setState({
        product: productData
      }));
  }

  render() {
    if (this.state.product === null) {
      return (
        <h1>LOADING</h1>
      );
    }
    return (
      <div className="container-fluid">
        <article className="row single-post mt-5 no-gutters">
          <div className="col-6 offset-3">
            <div className="row offset-1">
              <button className="btn btn-warning" onClick={() => this.props.setView('catalog')}>Back to Catalog</button>
            </div>
            <div className="image-wrapper float-left p-3">
              <img src={this.state.product.image} className="productDetailsImg" alt="product"></img>
            </div>
            <div className="single-post-content-wrapper p-3">
              <h1>{this.state.product.name}</h1>
              <br />
              <div className="priceTag">
                {`$ ${this.state.product.price}`}
              </div>
              <br />
              {this.state.product.shortDescription}
              <br /><br /><br /><br />
              <div className="longDescription">
                {this.state.product.longDescription}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default ProductDetails;
