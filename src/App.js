import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import Products from "./components/products";
import ViewProduct from "./components/view_product";
import Checkout from "./components/checkout";

class App extends Component {
  state = {
    data: [],
    checkout: false,
    view_product: [],
    products: [
      {
        id: 1,
        name: "Product One",
        imageUrl: "https://picsum.photos/200",
        value: 0
      },
      {
        id: 2,
        name: "Product Two",
        imageUrl: "https://picsum.photos/200",
        value: 0
      },
      {
        id: 3,
        name: "Product Three",
        imageUrl: "https://picsum.photos/200",
        value: 0
      },
      {
        id: 4,
        name: "Product Four",
        imageUrl: "https://picsum.photos/200",
        value: 0
      },
      {
        id: 5,
        name: "Product Five",
        imageUrl: "https://picsum.photos/200",
        value: 0
      },
      {
        id: 6,
        name: "Product Six",
        imageUrl: "https://picsum.photos/200",
        value: 0
      }
    ]
  };

  constructor() {
    super();
    //this.state = something
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://api.coinmarketcap.com/v1/ticker/?limit=10`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ data: json });
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
          <ul>
            {this.state.data.map(el => (
              <li>
                {el.name}: {el.price_usd}
              </li>
            ))}
          </ul>
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
