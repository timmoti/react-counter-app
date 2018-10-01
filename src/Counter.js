import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  formatValue() {
    const value = this.state.value;
    return value < 0 ? 'Negative' : value === 0 ? 'Zero' : 'Positive';
  }

  formatColor() {
    const value = this.state.value;
    let classes = 'center badge badge-pill m-2 badge-';
    return (classes +=
      value < 0 ? 'danger' : value === 0 ? 'warning' : 'success');
  }

  //setstate with object updater
  // handlePositiveClick = () => {
  //   this.setState({
  //     value: this.state.value + 1
  //   });
  // };

  //setstate with function updater
  handlePositiveClick = () => {
    this.setState(currentState => {
      return {
        value: currentState.value + 1
      };
    });
  };

  handleNegativeClick = () => {
    this.setState({
      value: this.state.value - 1
    });
  };

  render() {
    return (
      <div className="border border-warning rounded">
        <p className="badge m2 badge-primary badge-pill center">
          {this.props.name}
        </p>
        <p className={this.formatColor()}>{this.formatValue()}</p>
        <h1 className="big">{this.state.value}</h1>
        <button
          className="btn btn-primary btn-lg m-2"
          onClick={this.handlePositiveClick}
        >
          +
        </button>
        <button
          className="btn btn-danger btn-lg m-2"
          onClick={this.handleNegativeClick}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
