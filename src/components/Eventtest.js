import React, { Component } from "react";

class Eventtest extends Component {
  state = { count: 1 };

  onClickCountAdd(){
      this.setState({count: this.state.count + 1})
  }

  onClickCountSub(){
      this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickCountAdd.bind(this)}>Add 1</button>
        <button onClick={this.onClickCountSub.bind(this)}>Sub 1</button>
        {this.state.count}
      </div>
    );
  }
}

export default Eventtest;
