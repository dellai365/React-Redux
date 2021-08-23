import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Task from './Task'
import { Button } from 'react-bootstrap';
import { sortt } from './Todo';

function ListTask() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    const Sort = ()=>{
        dispatch(sortt())
    }


    return (
        <div>
            <ul className="list-group" >
                {
                    todos.map((todo)=>(
                        <Task  id={todo.id} description={todo.description} isDone={todo.isDone} />
                    ))
                }

            </ul>
            <Button onClick={()=>{Sort(todos)} } >Sort</Button>
        </div>
    )
}

export default ListTask