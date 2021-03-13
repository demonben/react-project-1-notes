import Item from "./Item";
import React from "react";

class ListNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <ul className="unList">
        {this.props.notes.map((note, index) =>
          <Item
            onChangeNote={(value) => { this.props.onChangeNote(value)}}
            key={note.id}
            note={note}
            index={index}
            onDelete={(index) => { this.props.onDelete(index) }}
          />
        )}
      </ul>
    )
  }
}
export default ListNote;
