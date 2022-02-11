

const conversionBinDec = (num = 0, indi = 'decimal') =>{
    let resultado = 0
    if(indi == 'decimal'){
        let reverseNum = num.toString().split("").reverse().join("")
        let base = 2
        reverseNum.split("").forEach((value, index) => {
            if(value == '1'){resultado = resultado+Math.pow(base, index)}
        });
    }
    else if(indi == 'binario'){
        let working = true
        resultado = ""
        let copyNum = num
        
        while(working){
            resultado = (copyNum % 2).toString() + resultado 
            copyNum = Math.floor(copyNum/2)

            if(copyNum < 1){
                working = false
            }
        }
    }
    return resultado
}


const sacarDescuento = (dinero = 100, descuento = 10) =>{
    return dinero - (dinero*descuento)/100
}



const cuantosAñosHanPasado = (fecha = new Date(2000,1,1)) =>{
    let fechaActual = new Date()
    let resultado = 0

    if(fecha.getFullYear() < fechaActual.getFullYear()){
        if(fecha.getMonth() <= fechaActual.getMonth() && fecha.getDate() < fechaActual.getDate()){
            resultado = fechaActual.getFullYear() - fecha.getFullYear()
        }
    }

    return resultado
}


const contarVocalesConsonantes = (palabra = '') =>{
    let resultado = []
    const vocales = ['a', 'e', 'i', 'o', 'u']
    let numVocales = 0

    palabra = palabra.toLowerCase()
    palabra = palabra.trim()

    if(palabra == ''){
        resultado.push(0)
        resultado.push(0)
    }
    else{
        console.log("a", palabra)
        palabra.split("").forEach((value, index) => {
            if(vocales.includes(value)){
                numVocales = numVocales + 1
            }
        })

        resultado.push(numVocales)
        resultado.push(palabra.length - numVocales)
    }

    return resultado
}



const validarNombre = (nombre = '') => {
    let solucion = false
    let expReg = new RegExp("1|2|3|4|5|6|7|8|9|0|!|#|%|&", "ig")
    if(!expReg.test(nombre)){
        solucion = true
    }

    return solucion
}


const validarEmail = (email = '') =>{
    let respuesta = false

    let arroba = 0, espacios = false, dotPostA = 0
    let contadorpreA = 0, contadorposA = 0, validadorDOT = true

    email.split("").forEach(value => {
        if(!espacios){
            if(value == '@'){arroba = arroba + 1}
            else if(value == ' '){espacios = true}
            else if(value == '.'){dotPostA = dotPostA + 1}

            if(arroba < 1){contadorpreA = contadorpreA+1}
            else{contadorposA = contadorposA+1}

            if(value == '.' && contadorposA == 2){validadorDOT = false}
        }
    })

    if(arroba == 1 && espacios == 0 && contadorpreA >0 && validadorDOT){
        respuesta = true
    }

    return respuesta
}
//3206960938


const elevarNumeros = (numeros = [1, 2, 3], exp = 2) =>{
    let resultado = []

    numeros.forEach(elem => {
        resultado.push(Math.pow(elem, exp))
    })

    return resultado
}


const numeroMasAltoBajo = (numeros = [0,1]) =>{
    numeros.sort()
    let numeroAltoBajo = [numeros[0],numeros[numeros.length -1]]

    return numeroAltoBajo
}


const encontrarParesImpares = (numeros = [1,2,3]) => {
    let pares = [], impares = []

    numeros.forEach(elem => {
        if((elem % 2) == 0){
            pares.push(elem)
        }
        else{impares.push(elem)}
    })

    return {pares, impares}
}

const ordenAscDes = (numeros = [1,2,3]) =>{
    let asc = numeros.map(e=>e).sort(), des = numeros.map(e=>e).sort((a,b) => b-a)
    console.log({asc, des})
    return {asc, des}

}

const eliminarDuplicados = (listadupli = [1,2,3,3]) =>{
    let listaLimpia = []

    listadupli.forEach((ele, index) => {
        if(index == 0){listaLimpia.push(ele)}
        else{
            listaLimpia.includes(ele)? true : listaLimpia.push(ele)
        }
    })

    return listaLimpia
}


const promedio = (numeros = [1,2,3,4]) =>{
    let resultado = 0

    numeros.forEach(e => {
        resultado = resultado + e
    })

    return resultado/numeros.length
}

export const funciones = {
    conversionBinDec,
    sacarDescuento,
    cuantosAñosHanPasado,
    contarVocalesConsonantes,
    validarNombre,
    validarEmail,
    elevarNumeros,
    numeroMasAltoBajo,
    encontrarParesImpares,
    ordenAscDes,
    eliminarDuplicados,
    promedio
}