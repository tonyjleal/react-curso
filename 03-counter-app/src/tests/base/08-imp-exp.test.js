import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en funciones que Héroes', () => {

    test('debe de retornar un héroe por id', () =>{
        
        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);


    });

    test('debe de retornar undefined si héroe no existe', () =>{
        
        const id = 100;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    });

    test('debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';

        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner);

        expect(heroe).toEqual(heroeData);
    });

    test('debe de retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';

        const heroe = getHeroesByOwner(owner);

        expect(heroe.length).toBe(2);
    });


    test('debe de retornar un arreglo vaío con owner no existente', () => {
        const owner = 'NOT EXIST';

        const heroe = getHeroesByOwner(owner);

        expect([]).toEqual(heroe);
    });

});