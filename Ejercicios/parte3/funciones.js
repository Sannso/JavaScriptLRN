
const randomNum = () => {
    return Math.floor(Math.random() * (99)) + 501
}

const isCapicua = (numero = 0) =>{
    let isit = false
    
    let num = numero.toString()
    let numinvert = num.split().reverse().join()
    
    isit = num === numinvert  

    // Primer intento codigo shit, pero revisa si un numero tiene cantidad par y saca la mitad
    let esPar = num.length % 2 == 0
    
    /*if(esPar){
        let mitad = num.length / 2
        let numHalf = stringNumHalf(num, mitad)
    }*/

    return isit
}

const  stringNumHalf = (num, mitad) =>{
    let returnString = ""
    for (let index = 0; index < mitad; index++) {
        returnString = returnString + num.charAt(index)
    }
    return returnString
} 


const factorialDe = (num = 0) => {
    let resultado = 1 // teniendo encuenta 0
    
    for (let index = 1; index <= num; index++) {
        resultado = resultado*index;
    }

    return resultado
} 


export const funciones ={
    randomNum,
    isCapicua,
    factorialDe
}