import { funciones as fn} from "./funciones.js"

//Ejercicio # 5
let respuesta5 = fn.invertirCadena("Hola Mundo")
console.log("La cadena Hola mundo invertida es: ", respuesta5)

//Ejercicio # 6
let respuesta6 = fn.contarPalabra("Hola mundo adios mundo, mundo? si mundo incluso oculta emundon", "mundo")
console.log("Veces que la palabra mundo sale: ", respuesta6)

//Ejercicio # 7
let respuesta7 = fn.esPalindromo("arra")
console.log("La palabra es palindroma?: ", respuesta7)

//Ejercicio # 8
let respuesta8 = fn.deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
console.log("Lista con patrones eliminados: ", respuesta8)