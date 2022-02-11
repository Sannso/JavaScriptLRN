// Ejemplo de callbacks

function cuadradoCallback(value, callback){
    //Settimeout simula una peticion a una API
    setTimeout(() =>{
        callback(value, value*value)
    }, Math.random() * 5000);
}


cuadradoCallback(3, (value, result)=>{
    console.log("Inicia callback")
    console.log(`Callback: ${value}, ${result}`)
    cuadradoCallback(4, (value, result)=>{
        console.log("Inicia callback")
        console.log(`Callback: ${value}, ${result}`)
    })
    cuadradoCallback(5, (value, result)=>{
        console.log("Inicia callback")
        console.log(`Callback: ${value}, ${result}`)
    })
})