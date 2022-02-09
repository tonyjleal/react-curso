import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length === 0)
            return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        
      
        handleAddTodo( newTodo );
        reset();
    }

  return (<>
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
    </>);
};
