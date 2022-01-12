import React from 'react';
import {shallow} from 'enzyme';
import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom'
//import { render } from "@testing-library/react";


describe('Pruebas en <PrimeraApp />', () => {

    //test('debe mostrar el mensaje Hola, Soy Goky', () => {

     //   const saludo = 'Hola, soy Goku';

      //  const {getByText} = render(<PrimeraApp saludo="Hola, soy Goku"/>);

      //  expect(getByText(saludo)).toBeInTheDocument();

    //    });

    test('debe de mostrar <PrimeraApp /> correctamente ', () => {
      const saludo = "Hola, soy Goku"
      const wrapper = shallow(<PrimeraApp saludo={saludo} />);

      expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', ()=> {
      const saludo = "Hola, soy Goku"
      const subTitulo = 'Soy un subtítulo';

      const wrapper = shallow(
        <PrimeraApp 
          saludo={saludo} 
          subtitulo = {subTitulo}
        />
      );

      const textoParrafo = wrapper.find('p').text();
      
      expect(textoParrafo).toBe(subTitulo);

    });
    
})