import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import {shallow} from 'enzyme';
import { useFetch } from "../../../hooks/useFetch";
import { useCounterMultiple } from "../../../hooks/useCounterMultiple";

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounterMultiple');


describe('Test <MultipleCustomHooks />', () => { 

    beforeEach( () => {
        useCounterMultiple.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })

    test('should show component success', () => { 

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();

     })

    test('should show information', () => { 
         
        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola mundo'
            }],
            loadin: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);
        
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Fernando');

    })



 })