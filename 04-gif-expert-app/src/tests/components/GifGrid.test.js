import '@testing-library/jest-dom';
import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe mostrar el componente correctamente', () => {
        
        useFetchGifs.mockReturnValue({ 
            data: [], 
            loading: true,
        });
        
        const wrapper = shallow(<GifGrid category="" />);
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {

        const gifs = [{
            id: 'id',
            url: 'https://localhost/sample',
            title: 'title'
        },{
            id: 'id2',
            url: 'https://localhost/sample',
            title: 'title'
        }]

        useFetchGifs.mockReturnValue({ 
            data: gifs, 
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
    


});
