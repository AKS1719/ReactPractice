import  {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1,text:"hello world"}],

}


export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(), // generates new id 
                text:action.payload // action.payload is a object which will pass 
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload) // action.payload.id or action.payload both will give same 
        },
        updateTodo: (state,action)=>{
            state.todos.map((todo)=>{
                if(todo.id == action.payload){
                    todo.text = action.payload
                }
            })
        }
    }
})


export const {addTodo,removeTodo,updateTodo} = todoSlice.actions


// here the above functionality will be used seperately so we must export them separetely as well this is the syntax

export default todoSlice.reducer 
// we are exporting the reduces as the store won't accept reducer from anywhere it only uses the reducers which we register in the store