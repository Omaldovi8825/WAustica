var botonesDecorativos = document.getElementsByClassName('boton-consola-pages')
var botonesMenu = document.getElementsByClassName('menu-pages-item-cel')
var time = 1000
var timeButtons = 800

function iluminaBotoncitos(){
    coordinaEncendidoBotones(3, 0, 1)
    coordinaEncendidoBotones(0, 1, 2)
    coordinaEncendidoBotones(1, 2, 3)
    coordinaEncendidoBotones(2, 3, 4) 
}

function coordinaEncendidoBotones(apaga, prende, multiplicador){
    setTimeout(() => {
        botonesDecorativos[apaga].style.boxShadow = 'none'
        botonesDecorativos[apaga].style.background = 'none'
        botonesDecorativos[prende].style.boxShadow = '0px 0px 20px #00ffff'
        botonesDecorativos[prende].style.background = '#99ffff'
    }, time*multiplicador)
}

function iluminaBotonesMenu(){
    coordinaEncendidoMenu(3, 0, 1)
    coordinaEncendidoMenu(0, 1, 2)
    coordinaEncendidoMenu(1, 2, 3)
    coordinaEncendidoMenu(2, 3, 4)
}

function coordinaEncendidoMenu(apaga, prende, multiplicador){
    setTimeout(() => {
        botonesMenu[apaga].style.boxShadow = 'none'
        botonesMenu[apaga].style.background = 'radial-gradient(white, #a19090)'
        botonesMenu[prende].style.boxShadow = '0px 0px 30px greenyellow'
        botonesMenu[prende].style.background = '#d9f3d3'
    }, timeButtons*multiplicador)
}

iluminaBotoncitos()
iluminaBotonesMenu()

setInterval(() => {
    iluminaBotoncitos()
}, time*4)

setInterval(() => {
    iluminaBotonesMenu()
}, timeButtons*4)