import { retornaArreglo } from "../../base/07-deses-arr";


describe('Pruebas en desestructuración', () => {

    test('debe de retornar un string y un número', () => {

        const resultado = ['ABC', 123];

        const [letras, numeros] = retornaArreglo();
        

        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);

    });
});