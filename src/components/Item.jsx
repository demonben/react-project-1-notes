import ModalNotes from "./ModalComponent"
function Item(props){
   const{note} = props;
   const {text, time, title} = note;
   
    return (
      <li className="note">
        {text} {time} {title}
        <button onClick={()=>props.onDelete(props.index)}>Delete</button>
        <ModalNotes modalNotes={props}></ModalNotes>
      </li>
    );
}
export default Item;