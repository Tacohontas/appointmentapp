import React, { Component } from "react";

class Form extends Component {
  state = { dataFromUser: "" };

  onSubmitForm(e) {
    e.preventDefault();
    console.log(e.target.elements.test.value);
    //   console.log(e.target.elements.test2.value);

    this.setState({ dataFromUser: e.target.elements.test.value });
  }

  onChangeInput(e){
    this.setState({ dataFromUser: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm.bind(this)}>
          <input onChange={this.onChangeInput.bind(this)}type="text" name={"test"}></input>
          {/* <input type="text" name={"test2"}></input> */}
          <button>Submit</button>
        </form>
        <div>{this.state.dataFromUser}</div>
      </div>
    );
  }
}

export default Form;
