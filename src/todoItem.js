import './TodoItem.css'

function TodoItem(props) {

  

    return (
      <li className="TodoItem">

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
      <i className="fa fa-check"></i>
      </span>
      
      <span className="Icon Icon-delete">
      <i className="fa fa-trash-o"></i>
      </span>
    </li>
      
    );
  }

export {TodoItem}