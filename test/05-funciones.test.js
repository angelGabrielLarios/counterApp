import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones"

describe('Pruebas de en 05-funciones', () => {

    test('Debe de retornar un objecto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        console.log(user);

        expect(testUser).toEqual(user)
        /* 
        el metodo toStricEqual es para comparar objetos, 
        ya que los obejctos

        pero tambien sirve el metodo toEqual
        */

    })

    test('getUsuarioActivo debe de retornar un objeto', () => {

        (() => {
            /*
            Mi solucion 
            */
            const name = 'Angel'
            const comparar = {
                uid: 'ABC567',
                username: name
            }
            const res = getUsuarioActivo(name)
            expect(comparar).toStrictEqual(res)
        });

        (() => {
            /* solucion del instructor */

            const name = `Angel`
            const user = getUsuarioActivo(name)

            expect(user).toStrictEqual({
                uid: 'ABC567',
                username: name
            })
        })();

    })

})