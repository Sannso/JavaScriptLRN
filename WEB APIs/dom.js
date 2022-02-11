/*console.log("prueba API")
let texto = "El demandante, que resultó herido en el concierto,"+ 
"afirmó que lo sucedido fue producto de 'una motivación para obtener"+
"ganancias a expensas de la salud y seguridad de los"+
"asistentes al concierto'"

const hablar = (texto)=>{
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}

hablar(texto)*/

///////// Elementos Document

console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.characterSet)
console.log(document.images)

setTimeout(()=>{
    console.log(document.getSelection().toString())
}, 3000)



// Metodos que ya no suelen utilizarse
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))

// Cambiados por: 
console.log(document.querySelector("#menu")) // si hay que poner # o .
// igual querySelector es mas lento que getElements
console.log(document.querySelectorAll("a"))

// tiene metodos como .length .forEach

// y más ...


// Interectuar con atributos de las etiquetas

console.log("valor de el atributo Lang de html: " + document.documentElement.lang)

// La notacion del punto esta bien pero es más correcto utilizar
// getAttribute porque es mas especifica y no decuelven lo mismo. Ej

console.log("Valor de un href con punto: " + 
    document.querySelector(".link-dom").href)

console.log("Valor con getAttribute: " + 
    document.querySelector(".link-dom").getAttribute("href"))

// Tambien se pueden modificar los atributos

document.documentElement.lang = "es"
console.log("valor de el atributo Lang de html: " + document.documentElement.lang)
// Este tambien se puede hacer con la notacion punto asi
document.documentElement.setAttribute("lang", "es-MX")

// Asignarlos a variables obviamente

const $linkDom = document.querySelector(".link-dom")

$linkDom.setAttribute("target", "_blank")
$linkDom.setAttribute("rel", "noopener") // BP evita dependencia con la otra pestaña
 
// ### Se pueden quitar atributos con removeAttribute



// --------------- DATA-ATTRIBUTES -----------------
console.log("Descripcion linkdom: " + $linkDom.getAttribute("data-description"))
console.log("Todos los data-A de linkdom: ")
console.log($linkDom.dataset )

// Se puede modificar con notacion "." o setAttribute; o remover con removeA

//ver info completa de estilo
console.log($linkDom.style)
//modificar estilos
$linkDom.style.setProperty("text-decoration", "none")
$linkDom.style.setProperty("display", "block")
$linkDom.style.textAlign = "center"
$linkDom.style.padding = "1rem"
$linkDom.style.borderRadius = ".5rem"



// ----------------------- Variables CCS - Custom Properties ----------- 
const $html = document.documentElement,
    $body = document.body

let dark_color = getComputedStyle($html) // ver info de estilo de otra forma
dark_color = dark_color.getPropertyValue("--dark-color")

console.log("el color: ", dark_color)


$body.style.backgroundColor = dark_color
$body.style.color = getComputedStyle($html).getPropertyValue("--yellow-color")



// ---------- Clases CSS ---------------------
const $card = document.querySelector(".card")

console.log($card)
console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList)
$card.classList.toggle("rotate-45")
// Toggle lo que hace es que si no tiene la clase se lo pone
    // y si lo tiene se lo quita

    // con replace se puede reemplazar de 1 en 1 las clases

    // tambien se pueden agregar varias clases con .add("1", "2"...)
    // remove se quitan


// ------------------------------- Texto y HTML

const $whatis = document.getElementById("que-es")
let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`

$whatis.innerText = text //inner no forma parte de lo "usado"
$whatis.textContent = text // es lo usado pero no "lee" las etiquetas
$whatis.innerHTML = text // Si lee las etiquetas
$whatis.outerHTML = text

// inner reemplaza lo de adrentro por lo nuevo, outer reemplaza toda la etiqueta por
//  el codigo html nuevo







// --------------- Traversing --- "Nodo enfocado a las etiquetas"
const $cards = document.querySelector(".cards")

console.log($cards)
console.log($cards.children)
console.log($cards.children[2])
console.log($cards.parentElement)
console.log($cards.parentNode) // igual que element
console.log($cards.firstElementChild) //firstChild muestra literal el primer nodo
                                    // el cual normalmente es es un enter o espacios
// HAY FIRST Y LAST 
// tambien hay __ElementSibling que devuele la etiqueta previous o next

//Saber cual es la etiqueta X mas cercana
console.log($cards.children[2].closest("section"))