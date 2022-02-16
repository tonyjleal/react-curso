import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"
import {shallow} from 'enzyme'

describe('test <RealExampleRef />', () => { 
    
    const wrapper = shallow(<RealExampleRef />)
    
    test('should show component success', () => { 
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
        
    })
    
    test('should show component <MultipleCustomHooks />', () => { 
        
        wrapper.find('button').simulate('click');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    })


 })