import React from 'react';
import {shallow} from 'enzyme';
import { HookApp } from '../HookApp';
import '@testing-library/jest-dom'

describe('Component HookApp', () => { 

    test('should show <HookApp /> success', () => {
    
        const wrapper = shallow(<HookApp />);

        expect(wrapper).toMatchSnapshot();

     });

    
     test('should show Hola Mundo into element H1', () => {

        const texto = 'Hola Mundo';

        const wrapper = shallow(<HookApp />);

        const textoH1 = wrapper.find('h1').text();

        expect(textoH1).toBe(texto);

     })


 })