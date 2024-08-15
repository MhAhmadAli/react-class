import React, { Component } from 'react';
import './MyClass.css'

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
      <div className='MyClass'>
        <div>My Class</div><br/>
        <input type="text" className='nameInput' />
        <div>{this.state.count}</div>
        <button onClick={this.updateCounter} className='count'>Count</button>
      </div>
    )
  }
}
