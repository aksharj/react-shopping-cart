import React, {Component} from "react";


class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ['tag1', 'tag2', 'tag3']
  };

  handleIncrement = () => this.setState({value: this.state.value + 1});

  render() {
    console.log(this.props);
    return <React.Fragment>
      {this.props.children}
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={this.handleIncrement} className="btn btn-secondary">Increment</button>
     </React.Fragment>
  }

  getBadgeClasses() {
    let classes = "margin-2 alert alert-";
    classes += (this.state.value === 0 ? 'primary' : 'secondary');
    return classes;
  }

  formatCount () {
    const {value} =  this.state;
    return value === 0 ? 'Zero' : value;
  }
}


export default Counter;
