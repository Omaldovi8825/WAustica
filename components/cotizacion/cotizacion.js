var modal = document.getElementById('cotiza')
var falsomodal = document.getElementById('fake-modal')
var barra = document.getElementById('barra1')
var personas = document.getElementById('numero-personas')
var notita = document.getElementsByClassName('notita')

function abrirModal(){
  modal.style.display = 'unset'
  falsomodal.style.display = 'unset'
  barra.value = '50'
  personas.innerHTML = barra.value
  barra.oninput = () => {
    notita[0].style.display = 'unset'
    personas.innerHTML = barra.value
  }
  barra.onmouseup = () => {
    notita[0].style.display = 'none'
  }
}

function cerrarModal(){
  modal.style.display = 'none'
  falsomodal.style.display = 'none'
}


function girarDisco(){
    var disco = document.getElementById('disco')
    var aguja = document.getElementById('aguja')
    
    aguja.classList.replace('aguja-lscape', 'aguja-girada-lscape')
    setTimeout(() => {
      disco.style.transform = 'rotate(720deg)'      
    }, 1600)
}

function girarDiscoCel(){
  var disco = document.getElementById('disco')
  var agujaCel = document.getElementById('aguja-cel')
  
  agujaCel.classList.replace('aguja-lscape-cel', 'aguja-lscape-cel-girada')
  setTimeout(() => {
    disco.style.transform = 'rotate(720deg)'      
  }, 1600)
}

