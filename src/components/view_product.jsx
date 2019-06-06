import React, { Component } from "react";

class ViewProduct extends Component {
  render() {
    const { product, showList } = this.props;
    return (
      <div className="card mb-3">
        <img
          src={product.imageUrl}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Sample product description</p>
          <a href="#" onClick={showList} class="btn btn-primary">
            Back
          </a>
        </div>
      </div>
    );
  }
}

export default ViewProduct;
