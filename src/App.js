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
  render(){
    return (
      <div>
        <UserForm/>
        <ListNote notes={this.state.notes}/>
      </div>
    )
  }
}

export default App;
