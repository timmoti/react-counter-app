import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { name: 'Tim', value: 3 },
        { name: 'Delph', value: 2 },
        { name: 'Shun', value: 1 },
        { name: 'Brian', value: 0 },
        { name: 'Xin Fang', value: 4 },
        { name: 'Calvin', value: 5 },
        { name: 'Sebastian', value: 6 },
        { name: 'Sheldon', value: 7 },
        { name: 'Hui Min', value: 8 },
        { name: 'Kai Xin', value: 9 }
      ]
    };
  }

  render() {
    return (
      <div className="App center">
        {this.state.counters.map(counter => (
          <Counter name={counter.name} value={counter.value} />
        ))}
      </div>
    );
  }
}

export default Counters;
