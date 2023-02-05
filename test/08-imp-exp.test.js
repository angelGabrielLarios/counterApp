import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp"


describe('Pruebas en 08-imp-exp', () => {

    test('getHeroesById debe retornar un hero por ID', () => {

        /* const id = 1

        const hero = getHeroeById(id)

        console.log(hero);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
         */

    });

    test('getHeroesById debe de regresar undefined si no existe el id', () => {

        /* const id = 100
        const hero = getHeroeById(id)

        console.log(hero);

        expect(hero).toBeFalsy() */

    });

    /* 

    tarea las pruebas de getHeroesByOwner 

    debe retonar un arreglo con los heroes de DC

    length === 3

    toEaqul al arreglo filtrado

    debe de retornar un arreglo con los heroes de marvel
    length === 2

    */

    (() => {
        /* Mi solucion */
        test('Debe retornar un arreglo con heroes de DC', () => {
            const owner = 'DC'
            const heroesDC = getHeroesByOwner(owner)



            expect(heroesDC).toEqual([
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ])

        });

        test('Debe devolver 3 de los heroes que son de DC', () => {
            const owner = 'DC'
            const length = 3
            const lengthHeroesDC = getHeroesByOwner(owner).length

            expect(lengthHeroesDC).toBe(length)
        })

        test('Debe devolver herores que son de marvel', () => {
            const owner = 'Marvel'
            const heroesMarvel = getHeroesByOwner(owner)

            expect(heroesMarvel).toEqual([
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ])
        })

        test('Debe devolver 2 de los heroes que son de Marvel', () => {
            const owner = 'Marvel'
            const length = 2
            const lengthHeroesMarvel = getHeroesByOwner(owner).length

            console.log(lengthHeroesMarvel)

            expect(lengthHeroesMarvel).toBe(length)
        })
    });

    (() => {
        /* solucion del instructor */
        test('getHeroesByOwner debe de regresar heroes de DC', () => {
            const owner = 'DC'
            const heroes = getHeroesByOwner(owner)

            expect(heroes.length).toBe(3)
            expect(heroes).toEqual([
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ])

            expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner))
        })

        test('getHeroesByOwner debe de regresar heroes de Marvel', () => {
            const owner = 'Marvel'
            const heroes = getHeroesByOwner(owner)

            expect(heroes.length).toBe(2)
            expect(heroes).toEqual([
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ])

            expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner))
        })


    })();



})