

export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'angel'
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );


/* 
Nota
para que algo puede ser testeado, debe tener un export
*/