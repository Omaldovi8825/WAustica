var botones = document.getElementsByClassName('sm-button')

function showMedia(){
    var desplazamiento = 170

    for(var i=0; i < botones.length; i++){
        botones[i].style.right = `${desplazamiento}px`
        desplazamiento += 100
    }

    setTimeout(() => {
        for(var j=0; j < botones.length; j++){
            botones[j].style.right = '61px'
        }
    }, 4000)   
}