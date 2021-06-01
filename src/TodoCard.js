import React from 'react'

const TodoCard = (props) => {
    return ( 
        <div className="Gone">
            <li>{props.title}<button onClick={()=>{props.clickToRemove(props.index)}}>X</button></li>
        </div>
     );
}
 
export default TodoCard;