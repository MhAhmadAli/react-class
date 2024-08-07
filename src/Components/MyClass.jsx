import React, { Component } from 'react'

export default class MyClass extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    }

    this.updateCounter = this.updateCounter.bind(this);
  }

  componentDidMount(){

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    
  }

  updateCounter() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.updateCounter}>Count</button>
      </div>
    )
  }
}
