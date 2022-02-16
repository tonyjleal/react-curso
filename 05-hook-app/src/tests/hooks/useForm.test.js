import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm';

describe('Test useForm', () => { 

    const initialForm = {
        name:'Antonio',
        email: 'test@test.com'
    }

    test('should return default form', () => { 
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;



        expect(values).toEqual(initialForm)
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')

    })

    test('should change it form\'s value (name)', () => { 

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
        });

        const [ values ] = result.current;
        expect(values).toEqual({...initialForm, name: 'Melissa'});
     })

    test('should reset form with RESET', () => { 

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange,reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });

            reset();
        })

        const [values] = result.current;
        expect(values).toEqual(initialForm)

     })

 })