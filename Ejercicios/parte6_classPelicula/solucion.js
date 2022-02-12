import {funciones as fn } from "./funcionesValidacion.js";

class Pelicula{
    constructor(id_IMDB, titulo, director, añoEstreno, paisOrigen, generos,
        calificacion){

        this.id_IMDB = id_IMDB
        this.titulo = titulo
        this.director = director
        this.añoEstreno = añoEstreno
        this.paisOrigen = paisOrigen
        this.generos = generos
        this.calificacion = calificacion

    }

    static generosAceptados(){
        console.log("Los generos aceptados son: Action, Adult, Adventure,",
        "Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, ",
        "Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, ",
        "Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, ",
        "Thriller, War, Western")
    }

    get fichaTecnica(){
        console.log("--------- ------------ ----------")
        console.log(`Ficha tecnica de la pelicula: ${titulo}`)
        console.log(`ID: ${this.id_IMDB}`)
        console.log(`Director: ${director}       |   Año de estreno: ${añoEstreno}`)
        console.log(`Pais de origen: ${paisOrigen}  |   Generos: ${generos}`)
        console.log(`Calificacion: ${calificacion}`)
        return 1
    }
}


// Variable para el while
let complete = true
let allrigth = false

// Estos datos deberian ser pedidos al usuario
let peli ={
    id: "aa1234567",
    titulo: "LaPeli",
    director: "Juanito",
    añoEstreno: "2005",
    paisOrigen: "España",
    generos: ["comedy", "drama"],
    calificacion: "3.4"
}

let {id, titulo, director, añoEstreno, paisOrigen, generos, calificacion} = peli

while(complete){
    //let id = window.prompt("Igrese el id de la pelicula") 
    //console.log(fn.validarID(id))

    if(!fn.validarID(id)){complete = false; console.log("El id es invalido")}
    else{console.log(`ID ${id} checked`)}

    if(!fn.validarTitulo(titulo)){complete = false; console.log("El titulo es invalido")}
    else{console.log(`titulo ${titulo} checked`)}

    if(!fn.validarDirector(director)){complete = false; console.log("El nombre de director es invalido")}
    else{console.log(`Nombre de director ${director} checked`)}

    if(!fn.validarAño(añoEstreno)){complete = false; console.log("El año de estreno es invalido")}
    else{console.log(`Año de estreno ${añoEstreno} checked`)}

    if(!fn.validarDirector(paisOrigen)){complete = false; console.log("El pais de origen es invalido")}
    else{console.log(`Pais de origen ${paisOrigen} checked`)}

    if(!fn.validarGeneros(generos)){complete = false; console.log("Los generos son invalidos")}
    else{console.log(`Generos ${generos} checked`)}

    if(!fn.validarCalificacion(calificacion)){complete = false; console.log("La calificacion es invalida")}
    else{console.log(`Calificacion ${calificacion} checked`)}

    //Todo deberia estar bien
    allrigth = true

    complete = false // quitar al final
}


if(allrigth){
    let pelicula = new Pelicula(id, titulo, director, añoEstreno,
        paisOrigen, generos, calificacion)

    pelicula.fichaTecnica
    

    Pelicula.generosAceptados()
}





