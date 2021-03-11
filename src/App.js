import './App.css';
// import MyComponent from './components/component'
import React from 'react';
import UserForm from './components/UserForm';
import ListNote from './components/ListNote';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    notes:[]
    }
  }
  callback(text){
    this.setState((prevState) => {
      const note = {
        id: Date.now(),
        text: text,
        time: new Date().toDateString(),
      };
      return {
        notes: [...prevState.notes, note],
      };
    });
  }
  deleteUser(index) {
    if(window.confirm("Are you sure want to delete?")){
      this.state.notes.splice(index, 1)
      this.setState({ notes: this.state.notes })
      console.log(index)
    }  
  }
  render(){
    return (
      <div>
        <UserForm callback={(text,title)=>{this.callback(text,title)}}/>
        <ListNote 
          notes={this.state.notes}
          onDelete={(index) => { this.deleteUser(index)}}
        />
      </div>
    )
  }
}

export default App;
