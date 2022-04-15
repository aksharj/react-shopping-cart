import React, {Component} from  'react';
import ReactDOM from 'react-dom/client';
import Counter from './counter';

class Counters extends Component {
  render() {
    const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;

    return (
      <div>
        <div className="mb-3">
          <button onClick={onReset} className="btn btn-danger mb-2">Reset Counter</button>
        </div>
        <div className="row">
          {counters.map((counter) =>
            <Counter key={counter.id} counter={counter} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement} />
          )}
        </div>
      </div>
    )
  }
}

export default Counters;
