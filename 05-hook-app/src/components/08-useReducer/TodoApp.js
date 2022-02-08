import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import './style.css';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

 const [ todos, dispatch ]  = useReducer(todoReducer, [], init);
 
 const [{description}, handleInputChange, reset] = useForm({
    description: ''
 });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  

 const handleSubmit = (e) => {
   
    e.preventDefault();

    if (description.trim().length == 0)
      return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }
    
    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action);
    reset();
  }

  const handleDelete = ( todoId ) => {

    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch(action);
  }

  const handleToggle = (todoId) => {

    const action = {
      type: 'toggle', 
      payload: todoId
    }

    dispatch(action);
  }

  return(
     <div>

        <h1> TODO APP ( { todos.length })</h1>
        <hr />
        <div  className='row'
        >
          <div className='col-7'>
              <TodoList 
                todos={todos} 
                handleDelete={handleDelete} 
                handleToggle={handleToggle}/>
          </div>
          <div className='col-5'>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
              <input 
              className='form-control'
              type="text" 
              name="description"
              placeholder='Aprender...'
              autoComplete='off' 
              value={description}
              onChange={handleInputChange}/>

              <button 
                type='submit' 
                className='btn btn-outline-primary col-12 mt-1'>
                Agregar
              </button>
            </form>
          </div>

        </div>
    </div>
    );
};
