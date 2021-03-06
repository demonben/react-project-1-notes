import "./App.css";
import React from "react";
import UserForm from "./components/UserForm";
import ListNote from "./components/ListNote";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }
  addNote(text, title) {
    this.setState((prevState) => {
      const note = {
        id: Date.now(),
        text: text,
        title: title,
        time: new Date() + "",
      };
      return {
        notes: [...prevState.notes, note],
      };
    });
  }
  deleteNote(index) {
    if (window.confirm("Are you sure want to delete?")) {
      this.state.notes.splice(index, 1);
      this.setState({ notes: this.state.notes });
    }
  }

  editNote(editedNote) {
    console.log(editedNote);
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => {
          if (note.id === editedNote.id) {
            return editedNote;
          } else {
            return note;
          }
        }),
      };
    });
  }
  render() {
    return (
      <div>
        <Header />
        <UserForm
          callback={(text, title) => {
            this.addNote(text, title);
          }}
        />
        <ListNote
          onChangeNote={(value) => {
            this.editNote(value);
          }}
          notes={this.state.notes}
          onDelete={(index) => {
            this.deleteNote(index);
          }}
        />
      </div>
    );
  }
}

export default App;
