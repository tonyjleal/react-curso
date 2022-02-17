import { AppRouter } from "../../../components/09-useContext/AppRouter"
import { mount } from 'enzyme'
import { UserContext } from "../../../components/09-useContext/UserContext"

describe('Test <AppRouter/>', () => { 
    
    const user = {
        id: 1,
        name: 'Antonio',
        email: 'test@test.com'
    }

    const wrapper = mount( 
        <UserContext.Provider value={{user}}>
            <AppRouter /> 
        </UserContext.Provider>
    )

    test('should show component success', () => { 
        
        expect(wrapper).toMatchSnapshot();

     })

 })