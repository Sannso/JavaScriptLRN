import { funciones as fnc } from "./funciones.js"

//Ejercicio # 1
//let cadena = window.prompt("Ingresar una cadena: ") //Esto ya recibe cadenas
console.log("Para la solucion 1 se tomara una entrada por defecto")
let cadena = "BISHOOOOOOOOOO"
fnc.contarCadena(cadena)

//Ejercicio # 2
console.log("\nSe cortara la cadena utilizada anteriormente")
fnc.cortarCadena(cadena, 5)

//Ejercicio # 3
console.log("\nPara la solucion 3 se tomara una entrada por defecto")
let cadena2 = "Esta es una cadena de prueba"
fnc.separarCadena(cadena2, 'a')

//Ejercicio # 4
console.log("\nPara la solucion 4 se tomara una entrada por defecto")
let cadena3 = "mitan bella"
fnc.repetirCadena(cadena3, 3)