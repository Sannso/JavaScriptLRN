
function sumar(a,b){
    return a+b
}

function restar(a,b){
    return a-b
}

// Esta es una forma de poder exportar varias cosas en una sola cosa
// es decir, en este caso en un prototipo que lleva todas las funciones
export const aritmetica = {
    sumar,
    restar
}

