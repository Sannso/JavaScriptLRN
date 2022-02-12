

const invertirCadena = (cadena = "") => {
    let pivot = ""
    // Deberia agregar if(!cadena)
    for (let index = (cadena.length -1); index >= 0; index--){
        pivot += cadena[index]
    }
    return pivot     
}


const contarPalabra = (cadena = "", palabra = "") => {
    let contador = 0
    let pivot = ""
    let flag = false
    for (const e in cadena) {
        if(!flag && cadena[e] == palabra[0]){
            flag = true
        }
        if(flag && pivot.length < palabra.length){
            pivot += cadena[e]
            if(pivot == palabra){contador++}
        }
        else{
            pivot = ""
            flag = false
        }
    }
    return contador
}


const esPalindromo = (cadena = "") => {
    let check = false
    for (let i = 0; i < (cadena.length /2).toFixed(0); i++) {
        if(cadena[i] == cadena[cadena.length -(i+1)]){check = true}
        else{check = false}
    }
    return check
}


const deletePattern = (cadena = "", delet = "") => {
    let posiciones = []
    let mPos = undefined
    let pivot = ""
    let flag = false
    for (const e in cadena) {
        if(!flag && cadena[e] == delet[0]){
            flag = true
            mPos = e
        }
        if(flag && pivot.length < delet.length){
            pivot += cadena[e]
            if(pivot == delet){posiciones.push(mPos)}
        }
        else{
            pivot = ""
            flag = false
        }
    }
    pivot = ""
    flag = false
    let contador = delet.length
    for (const e in cadena) {

        if(!flag && e.toString() == posiciones.find(elem => elem == e.toString())){
            flag = true
        }
        if(flag){
            contador--
            if(contador == 0){contador = delet.length; flag = false}
        }
        else{pivot += cadena[e]}
    }
    return pivot
}

export const funciones = {
    invertirCadena,
    contarPalabra,
    esPalindromo,
    deletePattern
}