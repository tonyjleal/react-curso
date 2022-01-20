import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en hook useFetchGifs', () => {
    
    test('debe retornar estado inicial ', () => {

        // const { data, loading} = useFetchGifstchGifs('One Punch');
        const { result } = renderHook(() => useFetchGifs('OnePunch'));
        const { data, loading } = result.current;
        
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });
    
});
