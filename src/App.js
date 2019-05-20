import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import Products from "./components/products";

class App extends Component {
  state = {
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

  componentDidMount() {
    //Ajax calls
    //this.setState =({something})
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

  // handleDelete = counterId => {
  //   const counters = this.state.counters.filter(c => c.id !== counterId);
  //   this.setState({ counters });
  // };
  handleReset = () => {
    const products = this.state.products.map(p => {
      p.value = 0;
      return p;
    });
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.products.filter(c => c.value > 0).length}
          productList={this.state.products.filter(p => p.value > 0)}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            products={this.state.products}
          />
          <Products
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            products={this.state.products}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
