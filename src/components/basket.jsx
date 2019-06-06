import React, { Component } from "react";

const Basket = ({ productList, onDelete, checkout }) => {
  // class Basket extends Component {
  //   render() {
  const basketImage = {
    width: "64px",
    height: "64px"
  };

  //const { productList, onDelete } = this.props;
  return (
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
            {productList.length ? (
              <ul className="list-group">
                {productList.map(p => (
                  <li
                    key={p.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {p.name}
                    <img
                      style={basketImage}
                      className="mr-3"
                      src={p.imageUrl}
                    />
                    <span className="badge badge-primary badge-pill">
                      {p.value}
                    </span>
                    <span
                      onClick={() => onDelete(p)}
                      className="badge badge-secondary badge-pill"
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="btn m2">Empty Bakset</span>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={checkout}
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
