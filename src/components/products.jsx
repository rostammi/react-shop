import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    const { products, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <React.Fragment>
        {products.map(product => (
          <Product
            product={product}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            key={product.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Products;
