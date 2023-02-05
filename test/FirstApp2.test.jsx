/* screen => el objecto que se esta renderizarlo */
import { render, screen } from "@testing-library/react"

import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {

    const title = `Hola, Soy Goku`
    const subTitle = `Soy un subtitulo`
    test('debe de hacer match con el snapshot', () => {

        const { container } = render(
            <FirstApp
                title={title}
            />
        )
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar el mensaje "Hola, Soy Goku"', () => {

        render(

            <FirstApp
                title={title}
            />
        )

        /* not => es para negar cosas */
        expect(screen.getByText(title)).toBeTruthy()


        /* screen.debug => es para ver el objecto*/
        screen.debug()
    })

    test('debe de mostrar el titulo en un h1', () => {
        /* 
        screen esta acutalizaco a los cambios del elementos
        */
        render(
            <FirstApp
                title={title}
            />
        )

        /* 
        getByRole => se refiere a una etiqueta de html
        */
        
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title)

        
    })


    test('debe mostrar el subtitulo enviado por props', () => { 
        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        )
        expect(screen.getAllByText(subTitle).length).toBe(2)
    })
})

