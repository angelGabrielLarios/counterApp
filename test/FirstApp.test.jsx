import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {


    (() => {
        test('should hacer match con el snapshot', () => {

            const title = `Hola soy goku`
            const { container } = render(<FirstApp title={title} />)
            console.log(container)
    
            expect(container).toMatchSnapshot()
    
            /* 
            render => actualizar el objecto Screen
            y devuelve objeto muy grande
     
            */
            /* realizar la inserccion */
    
    
        })
    });



    test('debe de mostrar el titulo en un h1', () => {
        const title = `Hola soy goku`

        /* recuerda la funcion render devuelve un objeto */

        const { container, getByText ,getByTestId} = render(<FirstApp title={title} />)

        /* expect(getByText(title)).toBeTruthy() */

        /* 
        container=> es un node de DOM 
        */
        /* const h1 = container.querySelector('h1')
        console.log(h1.innerHTML); */
        /*expect(h1.innerHTML).toBe(title) */

        /* expect(getByTestId('test-title')).toBeTruthy() */
        expect(getByTestId('test-title').innerHTML).toContain(title)



    });

    test('debe de mostrar el subtitulo enviado por pros', () => { 
        
        const title = `Hola, soy goku`
        const subTitle = `Soy un subtitulo`
        const {getByText, getAllByText} = render(
            <FirstApp 
                title={title}
                subTitle={subTitle}
            />
        )

        /* expect(getByText(title)).toBeTruthy() */
        expect(getAllByText(subTitle).length).toBe(2)

        /* 
        getByText => solo encuentra un solo texto entre todo el componente
        */

    })
})