const validarID = (id = 0) =>{
    let expReg = /^[a-z]{2}([0-9]{7})$/g.test(id)
    return expReg
} 

const validarTitulo = (titulo = "equisde") => {
    let resultado = false
    if(titulo.length > 0 && titulo.length < 100){resultado = true}

    return resultado
}

const validarDirector = (nombre = "NN") => {
    let resultado = false
    let expReg = /^[A-Za-zñÓóÍíÁáÉéÚúÜü]+$/g.test(nombre)
    if(nombre.length > 0 && nombre.length < 50 && expReg){resultado = true}

    return resultado
}

const validarAño = (año = "1901") => { //1895
    let resultado = false
    let expReg = /^[0-9]{4}$/g.test(año)
    if(expReg && parseInt(año) >= 1895){resultado = true}
    
    return resultado
}

const validarGeneros = (generos = []) =>{
    let resultado = true
    let generosValidos = ["action", "adult", "adventure", "animation", "biography", "comedy", "crime",
        "cocumentary" ,"drama", "family", "fantasy", "film noir", "game show", "history", "horror", "musical",
        "music", "mystery", "news", "reality tv", "romance", "sci fi", "short", "sport", "talk show",
        "thriller", "war", "western"]
    if(generos.length == 0){console.log("No se ingresaron generos");}

    generos.forEach(e =>{
        if(!generosValidos.includes(e)){resultado = false}
    })

    return resultado
}

const validarCalificacion = (califi = 0) =>{
    let expReg = /^[0-9](\.[0-9])*$/g.test(califi)

    return expReg
}

export const funciones = {
    validarID,
    validarTitulo,
    validarDirector,
    validarAño,
    validarGeneros,
    validarCalificacion
}