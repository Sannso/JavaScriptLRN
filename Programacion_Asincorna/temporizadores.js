console.log("inicio TO")
setTimeout(()=>{
    console.log("Ejecutando un set Time out una sola vez luedo de x tiempo")
}, 1000)
console.log("final TO")

let SI = false

if(SI){
    setInterval(()=>{
        console.log("Esto se ejecuta indefinidamente cada X tiempo")
    }, 3000)
}


// Se pueden cancelar estas funciones contras funciones a las que su nombre
// se les antepone el clearNombreFuncion, estas funciones deben estar asignadas a 
// una variable, y esta variable se le pasa como argumento a las clear