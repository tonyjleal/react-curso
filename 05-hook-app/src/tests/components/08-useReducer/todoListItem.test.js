import {shallow} from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test <TodoListItem />', () => { 
    const todo = demoTodos[0];
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    
    const wrapper = shallow(
        <TodoListItem 
            key={todo.id}
            todo={todo}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            />
    );

    test('should show component success', () => { 

        expect(wrapper).toMatchSnapshot();

    })
    
    test('should call function delete', () => { 
        
        wrapper.find('button').simulate('click')
        expect(handleDelete).toHaveBeenCalledWith( todo.id );
    })
    
    test('should call function toggle', () => { 
        
        wrapper.find('p').simulate('click')
        expect(handleToggle).toHaveBeenCalledWith( todo.id );
    })
    
    test('should show info success', () => { 

        const pClass = wrapper.find('p');

        expect(pClass.hasClass('false')).toBe(true);
        expect(pClass.text().trim()).toBe(`1. ${ todo.desc }`);

    })

    test('should have class complete if toggle is TODO.done is tue', () => { 


        todo.done = true;
        
        const wrapper = shallow(
            <TodoListItem 
                key={todo.id}
                todo={todo}
                index={0}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                />
        );
        const pClass = wrapper.find('p');

        expect(pClass.hasClass('complete')).toBe(true);
        expect(pClass.text().trim()).toBe(`1. ${ todo.desc }`);
    })
 })