import {shallow} from 'enzyme'
import { TodoList } from '../../../components/08-useReducer/TodoList'
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test component <TodoList />', () => { 

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <TodoList 
            todos={demoTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle} 
        />
    )

    test('should show component success', () => { 

        expect(wrapper).toMatchSnapshot();

     })

    test('should have two <TodoListItem />', () => { 

        const elements = wrapper.find('TodoListItem')

        expect(elements.length).toBe(demoTodos.length)

     })

    test('should have handleDelete function', () => { 
          
        const functionDelete = wrapper.find('TodoListItem').at(0).prop('handleDelete');
        
        console.log(functionDelete)

        expect(functionDelete).toEqual(expect.any(Function))

     })
    
 })