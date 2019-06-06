import React, { Component } from "react";
import Counter from "./counter";

class Product extends Component {
  render() {
    const { product, onIncrement, showProduct } = this.props;
    return (
      <div className="card">
        <img
          src={product.imageUrl}
          className="card-img-top"
          alt={product.name}
          onClick={() => showProduct(product)}
        />
        <div className="card-body">
          <h5 className="card-title">Product ID: {product.id}</h5>
          <p className="card-text">{product.name}</p>
          <div>
            {this.getDeleteButtonText()}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
              onClick={() => onIncrement(this.props.product)}
              className="btn btn-secondary btn-sm m-2"
            >
              {this.getAddButtonText()}
            </button>
          </div>
        </div>
      </div>
    );
  }

  getAddButtonText() {
    let addButtonText = this.props.product.value === 0 ? "AddToBasket" : "+";
    return addButtonText;
  }

  getDeleteButtonText() {
    let deleteButtonText =
      this.props.product.value !== 0 ? (
        <button
          onClick={() => this.props.onDecrement(this.props.product)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
      ) : (
        ""
      );
    return deleteButtonText;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.product.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.product;
    return value === 0 ? "" : value;
  }
}

export default Product;
