import { shallow, mount } from 'enzyme'
import { HomePage } from '../../../components/09-useContext/HomePage'
import { UserContext } from '../../../components/09-useContext/UserContext'

describe('Test Component <HomePage />', () => { 
    
    const user = {
        name: 'Antonio',
        email: 'test@test.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <HomePage />
        </UserContext.Provider>
    )


    test('should show component success', () => { 
        
        expect(wrapper).toMatchSnapshot();

     })

})