var contentToBeChanged = document.getElementsByClassName('content')
var imagen = document.getElementById('imagen')

function changeContent(paquete, personas, bocinas, subwoofer, precio, link){
    contentToBeChanged[0].innerHTML = paquete
    contentToBeChanged[1].innerHTML = personas
    contentToBeChanged[2].innerHTML = bocinas
    contentToBeChanged[3].innerHTML = subwoofer
    contentToBeChanged[4].innerHTML = precio
    imagen.src = link
}