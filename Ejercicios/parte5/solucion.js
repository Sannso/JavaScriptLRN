import { funciones as fn } from "./funciones.js";

const datos = {
    numero: 23519,
    indi: 'binario',
    dinero: 2000,
    descuento: 25,
    fecha: new Date(2020,9,7),
    nombre: 'Santiago',
    email: 'santiago@hotmail.com',
    numeros: [5, 2, 7, 4, 1, 6, 3, 8],
    arrayD: [1,2,2,3,4, 'a', 5, 'a', true, 9, true]
}
let {numero, indi, dinero, descuento, fecha, nombre, email, numeros, arrayD} = datos


// Ejercicio 15
let solucion_15 = fn.conversionBinDec(numero, indi)
console.log(`El numero ${numero} convertido a ${indi} es: ${solucion_15}`) 


// Ejercicio 16
let solucion_16 = fn.sacarDescuento(dinero, descuento)
console.log(`El descuento del ${descuento}% a ${dinero}$ es: ${solucion_16}`)


//Ejercicio 17
let solucion_17 = fn.cuantosAñosHanPasado(fecha)
console.log(`Desde la fecha ${fecha.toLocaleDateString()} han pasado: ${solucion_17} años`)


//Ejercicio 18
let solucion_18 = fn.contarVocalesConsonantes(indi)
console.log(`la palabra ${indi} tiene ${solucion_18[0]} vocales y ${solucion_18[1]} consonantes`)

//Ejercicio 19
let solucion_19 = fn.validarNombre(nombre)
console.log(`El nombre ${nombre} es valido?: ${solucion_19}`)

//Ejercicio 20
let solucion_20 = fn.validarEmail(email)
console.log(`Es valido el correo ${email}?: ${solucion_20}`)

//Ejercicio 21
let solucion_21 = fn.elevarNumeros(numeros)
console.log(`La lista de numeros ${numeros} elevados al cuadrado es: ${solucion_21}`)

//Ejercicio 22
let solucion_22 = fn.numeroMasAltoBajo(numeros)
console.log(`El numero mas Alto y Bajo en ese orden de ${numeros} es: ${solucion_22}`)

//Ejercicio 23
let solucion_23 = fn.encontrarParesImpares(numeros)
console.log(`Los numeros pares e impares del array ${numeros} es: ${solucion_23}`)
console.log(solucion_23)

//Ejercicio 24
let solucion_24 = fn.ordenAscDes(numeros)
console.log(`Los numeros ${numeros} ordenados Asc y Des son: ${solucion_24}`)

//Ejercicio 25 
let solucion_26 = fn.eliminarDuplicados(arrayD)
console.log(`El array ${arrayD} limpio es: ${solucion_26}`)

//Ejercicio 26
let solucion_27 = fn.promedio(numeros)
console.log(`El promedio de ${numeros} es: ${solucion_27}`)
