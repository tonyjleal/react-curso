import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";


describe('Test todoReducer', () => { 

    test('should return default state', () => { 
        
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    })

    test('should add new TODO', () => { 
        
        const newTodo = {
            id: '3',
            desc: 'Aprender NodeJs',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action);

        expect(state).toEqual([...demoTodos, newTodo]);
        expect(state.length).toBe(3);
     })

     test('should delete TODO', () => { 

        const idTodo = 1;

        const action = {
            type: 'delete',
            payload: idTodo
        }

        const state = todoReducer(demoTodos, action);
        
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);

     })


     test('should toggle TODO', () => { 

        const idTodo = 1;

        const action = {
            type: 'toggle',
            payload: idTodo
        }

        const state = todoReducer(demoTodos, action);

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);

     })

})