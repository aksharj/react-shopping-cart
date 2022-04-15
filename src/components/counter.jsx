import React, {Component} from "react";

class Counter extends Component {

  render() {

    return <React.Fragment>
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary m-2">+</button>
          <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary m-2" disabled={this.props.counter.value==0 ? 'disbaled' : ''}>-</button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-secondary m-2">x</button>
        </div>
      </div>
    </React.Fragment>
  }

  getClassName() {
    console.log(`this is counter ${this.props.counter}`);
  }

  getBadgeClasses() {
    let classes = "margin-2 alert alert-";
    classes += (this.props.counter.value === 0 ? 'primary' : 'secondary');
    return classes;
  }

  formatCount () {
    const {value} =  this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}


export default Counter;
