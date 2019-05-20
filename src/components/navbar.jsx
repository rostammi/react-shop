import React, { Component } from "react";

const NavBar = ({ totalCounters, productList }) => {
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

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Basket Items
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="list-group">
                {productList.map(p => (
                  <li className="list-group-item">
                    <span className="m-2">{p.name}</span>
                    <img className="m-2" src={p.imageUrl} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
