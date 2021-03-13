import ModalNotes from "./ModalComponent";

function Item(props) {
  const { note } = props;
  const { text, time, title, editTime } = note;
  {
    // console.log(props);
  }
  return (
    <li className="note">
      <p>{"Created: "}{time}</p>
      <p>{text}</p>
      <p>{title}</p>
      <p>
        {"Edited: "}
        {editTime}
      </p>
      <button onClick={() => props.onDelete(props.index)}>Delete</button>
      <ModalNotes
        onChangeNote={(value) => {
          props.onChangeNote(value);
          // {console.log(value)}
        }}
        modalNotes={props}
        onChange={(value) => alert(value)}
      ></ModalNotes>
    </li>
  );
}
export default Item;
