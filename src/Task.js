import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { toogle,deletee, edit } from './Todo';

function Task(props) {

    const dispatch=useDispatch();

    const Handletoogle = (id)=>{
        dispatch(toogle(id))
    }
    const Delete = (id)=>{
        dispatch(deletee(id))
    }
    const Edit = (id)=>{
        dispatch(edit(id))
    }

    return (
        <div className="d-flex align-items-center justify-content-between mb-3">
            <div
                style={{ flex: "1", padding: ".3em", border: "1px solid black", marginRight: "1em", borderRadius: ".2em" }}>
                <div  className="d-flex justify-content-between align-items-center">
                   
                    {props.description}
                    <input style={{ width: "1.3em", height: "1.3em" }}
                        type="checkbox"
                        onClick={()=>{Handletoogle(props.id)}}
                        checked={props.isDone} />
                </div>
            </div>
            <div className="d-flex" style={{ gap: "1em" }}>
                <Button variant="info" onClick={()=>{Edit(props.id)}} >Edit</Button>
                <Button variant="warning" onClick={()=>{Delete(props.id)}}  >Delete</Button>
            </div>
        </div>
    )
}

export default Task