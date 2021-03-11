import Item from "./Item";
import React from "react";

class ListNote extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
   return (
    <ul>
      {this.props.notes.map(note => 
        <Item key={note.id} note={note} />
      )}
    </ul>
  )
  }  
}
export default ListNote;
