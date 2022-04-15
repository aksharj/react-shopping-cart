import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {

  state = {
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
      {id: 5, value: 0}
    ]
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(count => count.id !== counterId);
    this.setState({counters});
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if(counters[index].value !== 0) {
      counters[index].value--;
    }
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };

  render() {
    return(
      <div>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
          <Counters counters={this.state.counters} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onReset={this.handleReset} onDecrement={this.handleDecrement}/>
        </main>
      </div>
    )
  };

}

export default App;
