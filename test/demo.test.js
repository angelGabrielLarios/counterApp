

describe('Pruebas en <DemoComponent></DemoComponent>', () => { 
    test('Esta prueba no debe de fallar', ()  => {

        /* inicializacion */
        const message1 = `Hola Mundo`
    
        /* estimulo */
        const message2 = message1.trim()
    
        /* observar el comportamiento */
        expect(message1).toBe(message2)
    
    })
})

describe('Pruebas en <DemoComponent2></DemoComponent2>', () => { 
    test('Esta prueba no debe de fallar', ()  => {

        /* inicializacion */
        const message1 = `Hola Mundo`
    
        /* estimulo */
        const message2 = message1.trim()
    
        /* observar el comportamiento */
        expect(message1).toBe(message2)
    
    })
})

