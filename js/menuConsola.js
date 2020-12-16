const botonesMenu = document.getElementsByClassName('menu-item-cel')
var timer = 800

function prendeMenuConsola(indice, time){
    setTimeout(() => {
        botonesMenu[indice].style.background = 'white'
        botonesMenu[indice].style.boxShadow = '0px 0px 18px greenyellow'
    }, time)

    setTimeout(() => {
        botonesMenu[indice].style.backgroundImage = 'radial-gradient(white, #a19090)'
        botonesMenu[indice].style.boxShadow = '0px 0px 20px black'
    }, time+timer)
}

for(var i=0; i<botonesMenu.length; i++){
    prendeMenuConsola( i, timer*(i+1) )
}

setInterval(() => {
    for(var i=0; i<botonesMenu.length; i++){
        prendeMenuConsola( i, timer*(i+1) )
    }
}, timer*4)



