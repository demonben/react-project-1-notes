import { render } from "@testing-library/react";
import React, { Component } from "react";
import ListNote from "./ListNote";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      notes: [],
    };
  }
  formSubmit(event) {
    event.preventDefault();
    this.props.callback(this.state.text)
  
  }
  changeInput(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.formSubmit(event)}>
          <div>
            <label htmlFor="name">
              <textarea
                type="text"
                name="name"
                id="name"
                value={this.state.text}
                onChange={(event) => this.changeInput(event.target.value)}
              ></textarea>
            </label>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
