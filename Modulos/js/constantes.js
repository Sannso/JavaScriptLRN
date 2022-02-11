export const NumeroRandom = Math.random()*100 

// Solo se pueden hacer exportaciones por defecto de funciones (directamente en la instancia)

export default function saludar(){
    console.log("Se ha exportado esta funcion por defecto")
} 