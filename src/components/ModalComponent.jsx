import Modal from "react-modal";
import React, {useState} from 'react'



Modal.setAppElement('#root')
function ModalNotes (props){
    
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
      <div>
        <button onClick={() => setModalIsOpen(true)}>open modal</button>
        <Modal isOpen={modalIsOpen}>
          {console.log(props.modalNotes.note)}
          <div>{props.modalNotes.note.time}</div> 
           <div>{props.modalNotes.note.title}</div> 
          <div>{props.modalNotes.note.text}</div>
          <div>
            <button onClick={() => setModalIsOpen(false)}>close</button>
          </div>
        </Modal>
      </div>
    );
}


export default ModalNotes;
