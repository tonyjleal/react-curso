import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import { LoginPage } from '../../../components/09-useContext/LoginPage'
import { UserContext } from '../../../components/09-useContext/UserContext'



describe('Test <LoginPage />', () => { 

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginPage />
        </UserContext.Provider>
    )

    test('should show component success', () => { 

        expect(wrapper).toMatchSnapshot();

    })


    test('should execute setUser with expected argument', () => { 
        const user = {
            id: 123,
            name: 'Antonio'
        }

        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith(user)
    })

 })