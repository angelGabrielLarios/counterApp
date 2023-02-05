import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en el <Counter App>', () => {

    const initialValue = 10


    test('debe hacer mathc con el snapshot', () => {

        const { container } = render(
            <CounterApp value={initialValue} />
        )

        expect(container).toMatchSnapshot()

    })


    test('debe de mostrar el valor inicial de 100 <Counter App valie={100}>', () => {

        render(
            <CounterApp
                value={100}
            />
        )

        expect(screen.getByText(100)).toBeTruthy()

        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100')
    })


    /* comprobar los click en elc counter */
    test('debe de incrementar con el boton de +1', () => {
        render(<CounterApp 
            value={initialValue}
        />)

        fireEvent.click(
            screen.getByText('+1')
            /* 
            le ponemos +1,porque existe e nuetro componente +1 
            */
        )

        expect(screen.getByText('11')).toBeTruthy()

        
    })

     /* comprobar los click en elc counter */
    test('debe de decrementar con el boton de -1', () => {
        render(<CounterApp 
            value={initialValue}
        />)

        fireEvent.click(
            screen.getByText('-1')
            /* 
            le ponemos +1,porque existe e nuetro componente +1 
            */
        )

        screen.debug()

        expect(screen.getByText('9')).toBeTruthy()

        
    })


    /* 
    Nosotros no evalumamos el hook use State
    */


    test('Debe de funcionar el boton de reset', () =>{
        render(
            <CounterApp value={355}/>
        )

        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('Reset'))

        expect(screen.getByText(355)).toBeTruthy()


    })


})







/* mi solucion */
/* 

describe('Pruebas en Counter App', () => {
    const value = 100
    test('debe de hacer match con el snapshot', () => {
        const {container} = render(
            <CounterApp 
                value={value}
            />
        )

        expect(container).toMatchSnapshot()
    })


    test('el valor inicial debe ser 100', () => { 
        render(
            <CounterApp 
                value={value}
            />
        )

        expect(screen.getByRole('heading', {level:2}).textContent).toContain('100')
    })
    
    
}) */