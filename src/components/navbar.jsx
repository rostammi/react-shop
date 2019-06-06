import React, { Component } from "react";
import Basket from "./basket";

class NavBar extends Component {
  render() {
    const {
      totalCounters,
      productList,
      onDelete,
      checkout,
      gotoHome
    } = this.props;

    return (
      <nav className="navbar navbar-light bg-light">
        <button onClick={gotoHome} type="button" className="btn btn-secondary">
          Home
        </button>

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Basket {totalCounters}
        </button>

        <Basket
          onDelete={onDelete}
          productList={productList}
          checkout={checkout}
        />
      </nav>
    );
  }
}

export default NavBar;
