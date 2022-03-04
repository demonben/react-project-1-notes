import ModalNotes from "./ModalComponent";

function Item(props) {
  const { note } = props;
  const { text, time, title, editTime } = note;

  return (
    <li className="note">
      <p>
        {"Created: "}
        {time}
      </p>
      <p>{title}</p>
      <p>{text}</p>
      <p>
        {"Edited: "}
        {editTime}
      </p>
      <button onClick={() => props.onDelete(props.index)}>Delete</button>
      <ModalNotes
        onChangeNote={(value) => {
          props.onChangeNote(value);
        }}
        modalNotes={props}
        onChange={(value) => alert(value)}
      ></ModalNotes>
    </li>
  );
}
export default Item;
