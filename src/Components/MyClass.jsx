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
    // triggered after the component is mounted
  }

  componentDidUpdate() {
    // triggered after the component is updated
  }

  componentWillUnmount() {
    // triggered before the component is removed
  }

  updateCounter() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <div>My Class</div><br/>
        <div>{this.state.count}</div>
        <button onClick={this.updateCounter}>Count</button>
      </div>
    )
  }
}
