import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import Products from "./components/products";
import ViewProduct from "./components/view_product";
import Checkout from "./components/checkout";

class App extends Component {
  state = {
    checkout: false,
    view_product: [],
    products: []
  };

  constructor() {
    super();
    //this.state = something
  }

  componentDidMount() {
    try {
      fetch("http://localhost:4000/api/products/")
        .then(response => response.json())
        .then(data => this.setState({ products: data }));
    } catch (error) {
      console.log(error);
    }
  }

  handleIncrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value++;
    this.setState({ products });
  };

  handleDecrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value--;
    this.setState({ products });
  };

  handleDelete = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value = 0;
    this.setState({ products });
  };

  handleReset = () => {
    const products = this.state.products.map(p => {
      p.value = 0;
      return p;
    });
    this.setState({ products });
  };

  handleshowProduct = product => {
    this.setState({ view_product: product });
  };

  handleshowList = product => {
    this.setState({ view_product: [] });
  };

  handleCheckout = () => {
    this.setState({ checkout: true });
  };

  handleGotoHome = () => {
    this.setState({ checkout: false, view_product: [] });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.products.filter(c => c.value > 0).length}
          productList={this.state.products.filter(p => p.value > 0)}
          onDelete={this.handleDelete}
          checkout={this.handleCheckout}
          gotoHome={this.handleGotoHome}
        />
        <main className="container">
          {this.state.checkout ? (
            <Checkout
              productList={this.state.products.filter(p => p.value > 0)}
              sumValue={this.state.products.reduce(
                (sum, p) => (sum += p.id * p.value),
                0
              )}
            />
          ) : this.state.view_product.id ? (
            <ViewProduct
              product={this.state.view_product}
              showList={this.handleshowList}
            />
          ) : (
            <Products
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              products={this.state.products}
              showProduct={this.handleshowProduct}
            />
          )}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
