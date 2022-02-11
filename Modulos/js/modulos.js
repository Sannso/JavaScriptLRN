import saludar, { NumeroRandom } from "./constantes.js"
import{ aritmetica as amc } from "./aritmetica.js"

console.log("Archivo js cargado desde modulos.js")
console.log(`Numero aleatorio importado de constantes: ${NumeroRandom}`)    
console.log(`Suma: ${amc.sumar(2,3)}`)
saludar()