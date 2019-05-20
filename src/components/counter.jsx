import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.product.value !== this.props.product.value) {
      //Ajax call
    }
  }

  componentWillUnmount() {
    //clean things like timers and listeners
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.product)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.product.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.product.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.product;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
