import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: "",
      notes: [],
    };
  }
  formSubmit(event) {
    event.preventDefault();
    this.props.callback(this.state.text, this.state.title);

    this.setState({
      text: "",
      title: "",
    });
  }
  changeInput(value) {
    this.setState({ text: value, title: this.state.title });
  }
  changeInputTitle(value) {
    this.setState({ title: value, text: this.state.text });
  }
  render() {
    return (
      <div className="form">
        <form onSubmit={(event) => this.formSubmit(event)}>
          <div>
            <div>
              <label className="lable" htmlFor="title">Title</label>
                <input
                  placeholder="your title..."
                  type="text"
                  name="title"
                  id="title"
                  value={this.state.title}
                  onChange={(event) =>
                    this.changeInputTitle(event.target.value)
                  }
                />
              
            </div>
          </div>

          <div>
            <label className="lable" htmlFor="text">Text</label>
              <textarea
                placeholder="your text..."
                type="text"
                id="text"
                value={this.state.text}
                onChange={(event) => this.changeInput(event.target.value)}
              ></textarea>
            
          </div>
          <div>
            <button className="add-note" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
