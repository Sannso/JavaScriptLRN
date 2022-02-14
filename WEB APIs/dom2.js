// Creacion de etiquetas dinamicamente (Creacion de elementos y fragmentos)

//creacion de card
const $figure = document.createElement("figure"),
 $image = document.createElement("img"),
 $figcaption = document.createElement("figcaption"),
 $figcaptionText = document.createTextNode("Other Animals"),
 $cards = document.querySelector(".cards")

// Para agregar un hijo appendChild
 // esto solo agrega por ejemplo <figure></figure>


$figcaption.appendChild($figcaptionText)

$image.setAttribute("src", "https://placeimg.com/200/201/animals")
$image.setAttribute("alt", "OtherAnimals")

$figure.classList.add("card")
$figure.appendChild($image)
$figure.appendChild($figcaption)
$cards.appendChild($figure)


// Agregar lista
const $h3Ele = document.createElement("h2")
$h3Ele.appendChild(document.createTextNode("Estaciones del año"))
document.body.appendChild($h3Ele)

const estaciones = ["invierno", "primavera", "verano", "otoño"]

const $nav = document.createElement("nav"),
$ul = document.createElement("ul")


estaciones.forEach((el) =>{
    const $li = document.createElement("li")
    $li.appendChild(document.createTextNode(el))
    $ul.appendChild($li)
})

$nav.setAttribute("id", "estaciones")
$nav.appendChild($ul)
document.body.appendChild($nav)

/// --------- Fragmentos ----------------

const mesesAño = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto",
"septiembre", "octubre", "noviembre", "diciembre"]

const $ul2 = document.createElement("ul"),
    fragmento = document.createDocumentFragment()


mesesAño.forEach((el) =>{
    const $li2 = document.createElement("li")
    $li2.appendChild(document.createTextNode(el))
    fragmento.appendChild($li2)
})

//titulo
const $h3T = document.createElement("h2")
$h3T.appendChild(document.createTextNode("Meses del año"))
document.body.appendChild($h3T)
//

$ul2.appendChild(fragmento)
document.body.appendChild($ul2)