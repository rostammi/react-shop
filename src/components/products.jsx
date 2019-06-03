import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    const { products, onIncrement, onDecrement } = this.props;
    return (
      <React.Fragment>
        <div className="card-deck">
          {products.map(product => (
            <Product
              product={product}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              key={product.id}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
