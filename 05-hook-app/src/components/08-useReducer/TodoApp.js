import React, { useReducer } from 'react';
import './style.css';
import { todoReducer } from './todoReducer';

const initialState = [{
  id: new Date().getTime(),
  desc: 'Aprender React', 
  done: false
}];


export const TodoApp = () => {

  
 const [ todos ]  = useReducer(todoReducer, initialState);

  return(
     <div>

        <h1> TODO APP ( { todos.length })</h1>
        <hr />
        <ul>
          <li>Hola</li>
          <li>Mundo</li>
          <li>Prueba</li>
        </ul>
    </div>
    );
};
