// Funciones asincronas

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


async function funcionAsincronaDeclarada() {
    try{console.log("Inicio de la funcion asincrona declarada")
        let obj = await cuadradoPromise(2)
        console.log(`value: ${obj.value} result: ${obj.result}`)

        obj = await cuadradoPromise("3")
        console.log(`value: ${obj.value} result: ${obj.result}`)

        obj = await cuadradoPromise(4)
        console.log(`value: ${obj.value} result: ${obj.result}`)
    }catch(err){
        console.error(err)
    }
    console.log("Fin")
}

funcionAsincronaDeclarada()


const funcionAsincronaExpresada = async () =>{
    console.log("Aqui iria exacatamente lo mismo que la funcion declarada");
}

funcionAsincronaExpresada()