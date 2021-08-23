import { createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoslice = createSlice({
    name: "todos",
    initialState: [{
        id: uuidv4(),
        description: "n9oum 6h30",
        isDone: true,
    },
    {
        id: uuidv4(),
        description: "nofter 9bal 7h10",
        isDone: false,
    },
    {
        id: uuidv4(),
        description: "nosel f wa9t",
        isDone: true,

    }],

    reducers: {
        add: (state, action) => {
            const newTask = {
                id: uuidv4(),
                description: action.payload,
                isDone: false


            };
            state.push(newTask)
        },
        toogle : (state,action)=>{
            const index = state.findIndex(
                (todo)=>todo.id===action.payload
            )
            state[index].isDone= ! state[index].isDone
        },
        deletee : (state,action)=>{
            return state.filter((todo)=>todo.id !== action.payload );
        },
        edit : (state,action)=>{
            const index = state.findIndex(
                (todo)=>todo.id===action.payload
            )
            state[index].description = prompt('baddel');    
        },
        sortt : (state)=>{
            state.sort((a,b)=>(a.isDone===b.isDone) ? 0 : a.isDone ? -1 : 1)

        }
    },
}
)


export const{add, toogle, deletee, edit, sortt}=todoslice.actions
export default todoslice.reducer
