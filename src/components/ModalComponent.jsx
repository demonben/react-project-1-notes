import Modal from "react-modal";
import React, { useState } from "react";

Modal.setAppElement("#root");

function ModalNotes(props) {
  // console.log(props)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [expValue, setExpValue] = useState(props.modalNotes.note.title);
  const [expValueText, setExpValueText] = useState(props.modalNotes.note.text);


  const changeNote = (value) => {
    const editNote = props.modalNotes.note;
    editNote.title = value
    console.log(value);
    editNote.editTime = new Date().toDateString()
      props.onChangeNote(editNote);
  }
  const changeNoteText = (value) => {
    const editNoteText = props.modalNotes.note;
    editNoteText.text = value;
    console.log(value);
    editNoteText.editTime = new Date().toDateString();
    props.onChangeNote(editNoteText);
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>open modal</button>
      <Modal isOpen={modalIsOpen}>
        <div>{props.modalNotes.note.time}</div>
       

        <div>
          <label htmlFor="noteChange">
            <textarea
              name="noteChange"
              id="noteChange"
              cols="30"
              rows="10"
              value={expValue}
              onChange={(event) => setExpValue(event.target.value)}
            ></textarea>
          </label>
        </div>

        <div>
          <label htmlFor="noteChange">
            <textarea
              name="noteChange"
              id="noteChange"
              cols="30"
              rows="10"
              value={expValueText}
              onChange={(event) => setExpValueText(event.target.value)}
            ></textarea>
          </label>
        </div>

        <div>
          <button
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            close
          </button>
          <button
            onClick={() => {
            
              changeNote(expValue);
              changeNoteText(expValueText);
              setModalIsOpen(false);
              setExpValue("");
            }}
          >
            Change
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalNotes;
