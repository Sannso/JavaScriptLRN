// Resuelve el problema de los callbacks, llamado callback hell

function cuadradoPromise(value){
    if(typeof value !== "number"){
        return Promise.reject(`El valor ingresado ${value} no es numerico`)
    }
    return new Promise((resolve, reject)=>{ //(si se cumple, si no se cumple)
        setTimeout(() =>{
            resolve({
                value,
                result: value*value
            })
        }, Math.random() * 5000);
    })
}

cuadradoPromise(3)
    .then((obj)=>{ // Resive la parte que se cumple, es decir el resolve
        console.log("resultado: ", obj)
        return cuadradoPromise("a") // Aqui se para todo el funcionamiento si
    })                              //  si no es valor numerico
    .then(obj =>{
        console.log("resultado: ", obj)
        return cuadradoPromise(4)
    })
    .then(obj =>{
        console.log("resultado: ", obj)
        return cuadradoPromise(5)
    })
    .then(obj =>{
        console.log("resultado: ", obj)
        return cuadradoPromise(6)
    })
    .then(obj =>{
        console.log("resultado: ", obj)
        return cuadradoPromise(7)
    })
    .then(obj =>{
        console.log("resultado: ", obj)
        console.log("Fin")
    })
    .catch(err => {
        console.log(err)
    });