import React, { useReducer } from 'react';
import './style.css';
import { todoReducer } from './todoReducer';


export const TodoApp = () => {

 const init = () => {
  return [{
    id: new Date().getTime(),
    desc: 'Aprender React', 
    done: false
  }];
 }
 
 const [ todos, dispatch ]  = useReducer(todoReducer, [], init);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: 'New Task',
      done: false
    }
    
    const action = {
      type: 'add',
      payload: newTodo
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
            <ul className='list-group list-group-flush'>
              {
                todos.map((todo, i) => {
                  return <li
                          key={todo.id}
                          className='list-group-item'>
                          <p className='text-center'>{ i +1 }. { todo.desc }</p> 
                            <button className='btn btn-danger'>
                              Borrar
                            </button>
                          </li>
                })
              }
            </ul>
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
              autoComplete='off' />

              <button type='submit' className='btn btn-outline-primary col-12 mt-1'>
                Agregar
              </button>
            </form>
          </div>

        </div>
    </div>
    );
};
