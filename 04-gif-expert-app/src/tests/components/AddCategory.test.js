import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
   
    const setCategories = jest.fn();
    let wrapper;
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe mostrarse correctamente', () => {


        expect(wrapper).toMatchSnapshot();

    });

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe( value );

    }); 
    
    test('NO debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        // Comprobamos que no se llama al método setCategories al hacer submit
        expect(setCategories ).not.toHaveBeenCalled();

    });
    

});




