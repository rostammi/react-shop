import React, { Component } from "react";
import Basket from "./basket";

class NavBar extends Component {
  render() {
    const { totalCounters, productList, onDelete } = this.props;

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Basket
          <span className="badge badge-pill badge-secondary m-2">
            {totalCounters}
          </span>
        </a>

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Show Basket Items
        </button>

        <Basket onDelete={onDelete} productList={productList} />
      </nav>
    );
  }
}

export default NavBar;
