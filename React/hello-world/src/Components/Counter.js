import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment(){
    //   this.state.count = this.state.count +1
    // this.setState({
    //     count: this.state.count +1
    // },  ()=> console.log(this.state.count))

    this.setState(prevState=>({
        count: prevState.count +1
    }))
    console.log(this.state.count)
  }

  incrementFive(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
  }

  render() {
    return (
      <div>
        <div>count : {this.state.count}</div>

        <button onClick={() => this.increment()}>Subscribe</button>
        <button onClick={() => this.incrementFive()}>Subscribe Five</button>
      </div>
    );
  }
}

export default Counter;
