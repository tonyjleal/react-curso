import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import './style.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

 const [ todos, dispatch ]  = useReducer(todoReducer, [], init);
 


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = ( newTodo ) => {
    dispatch({
      type: 'add',
      payload: newTodo
    });
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

        <h1> TODO APP ( { todos.length } )</h1>
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
              <TodoAdd 
                handleAddTodo={handleAddTodo}/>
          </div>
        </div>
    </div>
    );
};
