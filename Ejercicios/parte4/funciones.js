

const isPrimo = (numero = 1) => {
    let resultado = false
    
    if(numero > 1){
        let siEsPrimo = (numero % 2 != 0) && (numero % 3 != 0) && (numero % 5 != 0)
        && (numero % 7 != 0) && (numero % 11 != 0) && (numero % 13 != 0);
        
        let excepciones = (numero == 2) || (numero == 3) || (numero == 5) || (numero == 7)
        || (numero == 11) || (numero == 13);

        if(siEsPrimo){ resultado = true }
        if(excepciones){ resultado = true }  
        //excepciones? resultado = true : resultado = false  
    }

    return resultado
}

const parOimpar = (numero = 0) =>{
    let resultado = "impar"
    if(numero % 2 == 0){resultado = "par"}

    return resultado
}


const conversorGrados = (grado = 0, indi = 'C') => {
    let resultado = "NN"
    if(indi == 'C'){
        resultado = (grado+32).toString() + '°F'
    }
    else{
        resultado = (grado-32).toString() + '°C'
    }

    return `Los grados ${grado}°${indi} se convierten en: ${resultado}`
}


export const funciones = {
    isPrimo,
    parOimpar,
    conversorGrados
}  