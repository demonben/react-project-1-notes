import './App.css';
// import MyComponent from './components/component'
import React from 'react';
import UserForm from './components/UserForm';
import ListNote from './components/ListNote';
import Modal from "react-modal";
import ModalNotes from './components/ModalComponent'



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    notes:[]
    }
  }
  addNote(text, title){
    this.setState((prevState) => {
      const note = {
        id: Date.now(),
        text: text,
        title: title,
        time: new Date().toDateString(),
      };
      return {
        notes: [...prevState.notes, note],
      };
    });
  }
  deleteNote(index) {
    if(window.confirm("Are you sure want to delete?")){
      this.state.notes.splice(index, 1)
      this.setState({ notes: this.state.notes })
      console.log(index)
    }  

  }
    
  editNote(editedNote) {
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
  render(){
    return (
      <div>
        <UserForm callback={(text,title)=>{this.addNote(text,title)}}/>
        <ListNote 
          onChangeNote={(value) => { this.editNote(value) }}
          notes={this.state.notes}
          onDelete={(index) => { this.deleteNote(index)}}
        />
       
      </div>
    )
  }
}

export default App;
