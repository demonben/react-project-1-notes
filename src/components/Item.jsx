function Item(props){
   const{note} = props;
   const {text} = note;
    return(

        <li>{text}</li>
    )
}
export default Item;