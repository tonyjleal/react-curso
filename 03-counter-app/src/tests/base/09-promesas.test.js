
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe('Pruebas con promesas', () => {

    test('getHeroeByIdAsync debe de retornar un héroe async', () => {
        const id = 1;

        return expect(getHeroeByIdAsync(id)).resolves.toBe(heroes[0]);

    });

    test('getHeroeByIdAsync debe de retornar un error si el héroe por id no existe', () => {
        const id = 100;
        return expect(getHeroeByIdAsync(id)).rejects.toBe('No se pudo encontrar el héroe');
       
    });

});