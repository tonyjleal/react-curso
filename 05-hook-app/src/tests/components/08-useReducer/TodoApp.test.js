import { shallow, mount } from 'enzyme'
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react'

describe('Test <TodoApp />', () => { 
    
    const wrapper = shallow(<TodoApp />);
    beforeEach( () => {
        Storage.prototype.setItem = jest.fn(() => {});
    })
 

    test('should show component success', () => { 
        
        expect(wrapper).toMatchSnapshot();

     })
    
     test('should add TODO', () => { 
        
        const wrapper = mount(<TodoApp />);

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1])
        })

        const h1 = wrapper.find('h1');
        expect(h1.text().trim()).toBe('TODO APP ( 2 )');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

     });

     test('should delete a TODO', () => { 
         
        act(() => {
 
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
 
        })
        expect(wrapper.find('h1').text().trim()).toBe('TODO APP ( 0 )');
 
      })
 })

