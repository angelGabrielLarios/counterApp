import { getImagen } from "../src/base-pruebas/11-async-await"


describe('Pruebas en 11-async-await', () => {

    test('getImagen debe de retornar un url de la imagen', async () => {
        const resp = await getImagen()
        
        console.log(resp)

        expect(typeof resp).toBe('string')




    })
})