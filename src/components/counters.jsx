import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, products, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary sm m-2">
          Reset
        </button>
        {products.map(product => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
