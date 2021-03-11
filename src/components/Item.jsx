function Item(props){
   const{note} = props;
   const {text, time} = note;
   
    return (
      <li className="note">
        {text} {time}
        <button onClick={()=>props.onDelete(props.index)}>Delete</button>
      </li>
    );
}
export default Item;