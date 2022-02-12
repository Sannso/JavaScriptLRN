// Verificacion de una cadena
function isString(cadena){
    if(typeof cadena == 'string'){
        //console.log(`${cadena}: SI es una cadena`)
        return true
    }
    else{
        //console.log(`${cadena}: NO es una cadena`)
        return false
    }
}

// Funcion para contar caracteres
function contarCadena(cadena){
    if(isString(cadena)){
        console.log(`numero de caracteres de: ${cadena} | Son: ${cadena.length}`)
    }
    else{
        console.log(`${cadena}: NO es una cadena`)
    }
}



// Funcion para recortar cadena en numero de caracteres especificados
// (saber que hay una funcion para esto)
function cortarCadena(cadena, lugar){
    if(isString(cadena && !isNaN(lugar))){
        let newCadena = ""
        for (let index = 0; index < lugar; index++) {
            newCadena+=cadena[index] 
        }
        console.log(`Cadena: ${cadena} | Recortada en ${lugar}: ${newCadena}`)
    }
    else{
        console.log(`${cadena} o ${lugar}: NO es una cadena/numero`)
    }
}


// Funcion para devolver un array con strings segun un caracter
function separarCadena(cadena, caracter){
    if(isString(cadena) && isString(caracter)){
        let arrayCadenas = []
        let pivotCadena = ""
        for (let index = 0; index < cadena.length; index++) {
            if(cadena[index] == caracter){
                arrayCadenas.push(pivotCadena)
                pivotCadena = ""
            }
            else if(index == cadena.length-1){
                pivotCadena+=cadena[index]
                arrayCadenas.push(pivotCadena)
            }
            else{
                pivotCadena+=cadena[index]
            }
        }
        console.log(`Cadena: ${cadena} | Array separado por ${caracter}: [${arrayCadenas}]`)
    }
    else{
        console.log(`${cadena} o ${caracter}: NO es una cadena/caracter`)
    }
}


// Funcion que repite un texto
function repetirCadena(cadena, repeticion){
    if(isString(cadena) && !isNaN(repeticion)){
        let cadenaRepetida = ""
        for (let index = 0; index < repeticion; index++) {
            cadenaRepetida+=cadena + " "
        }
        console.log(`Cadena: ${cadena} | Repetida ${repeticion} veces: ${cadenaRepetida}`)
    }
    else{
        console.log(`${cadena} o ${caracter}: NO es una cadena/numero`)
    }
}


export const funciones = {
    isString,
    contarCadena,
    cortarCadena,
    separarCadena,
    repetirCadena
} 