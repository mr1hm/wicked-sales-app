import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartSummary';
import CheckoutForm from './checkoutForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      cartTotal: null,
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.getCartTotal = this.getCartTotal.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartTotal() {
    let totalCost = 0;
    for (let i = 0; i < this.state.cart.length; i++) {
      totalCost += this.state.cart[i].price;
    }
    let grandTotal = (totalCost / 100).toFixed(2);
    this.setState({ cartTotal: grandTotal });
  }

  placeOrder(userInfo) {
    const myInit = {
      method: 'POST',
      body: JSON.stringify(userInfo),
      header: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/orders.php', myInit)
      .then(response => response.json())
      .then(userInfo => this.setState({
        cart: this.state.cart.concat(userInfo)
      }))
      .then(() => this.setState({
        cart: []
      }))
      .catch(error => console.error(error.message));
    this.setState({
      view: { name: 'catalog', params: {} }
    });
  }

  addToCart(product) {
    const myInit = {
      method: 'POST',
      body: JSON.stringify(product),
      header: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/cart.php', myInit)
      .then(response => response.json())
      .then(product => this.setState({
        cart: this.state.cart.concat(product)
      }))
      .catch(error => console.error(error.message));
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(cartData => this.setState({
        cart: cartData
      }))
      .then(() => this.getCartTotal())
      .catch(error => console.error(error.message));
  }

  setView(name, params) {
    this.setState({
      view: { name: name, params: params }
    });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className="container main">
          <Header text="Wicked Sales" setViewCart={this.setView} cartItemCount={this.state.cart.length}/>
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <ProductDetails setView={this.setView} productObj={this.state.view.params.id} addToCart={this.addToCart} />
      );
    } else if (this.state.view.name === 'cart') {
      if (this.state.cart.length === 0) {
        return (
          <div className="container main">
            <Header text="Cart Summary" cartItemCount={this.state.cart.length} />
            <CartSummary text="There are no items in your cart" cartSummary={this.state.cart} clickHandler={this.setView} />
          </div>
        );
      }
      return (
        <div className="container main">
          <Header text="Cart Summary" cartItemCount={this.state.cart.length} />
          <CartSummary cartTotal={this.state.cartTotal} cartSummary={this.state.cart} clickHandler={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div className="container main">
          <Header text="Checkout" cartItemCount={this.state.cart.length} />
          <CheckoutForm placeOrder={this.placeOrder} cartTotal={this.state.cartTotal} cartSummary={this.state.cart} backToCatalog={this.setView} />
        </div>
      );
    }
  }
}
