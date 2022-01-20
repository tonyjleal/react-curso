import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en hook useFetchGifs', () => {
    
    test('debe retornar estado inicial ', async() => {

        // const { data, loading} = useFetchGifstchGifs('One Punch');
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('OnePunch'));
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });
    
    test('debe retornar un arreglo de imgs y loading false ', async() => {
       
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('OnePunch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        
        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);


    });


});
