var slideIndex = 1;

const rwdArrow = document.getElementById('rwd-arrow')
const fwdArrow = document.getElementById('fwd-arrow')


rwdArrow.onmouseover = function() {
  this.src = 'https://i.ibb.co/4tXTzdx/menu-rw-encendido.png'
}

rwdArrow.onmouseout = function() {
  this.src = 'https://i.ibb.co/C8HNjZz/rw-apagado.png'
}

fwdArrow.onmouseover = function() {
  this.src = 'https://i.ibb.co/JdS3DTX/fw-encendido.png'
}

fwdArrow.onmouseout = function() {
  this.src = 'https://i.ibb.co/sqd5jtd/menu-fw-apagado.png'
}

function cambioSlide(n) {
    showSlides(slideIndex += n);
  }
  
  function slideActual(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i
    var slides = document.getElementsByClassName('slides')
    var bolitas = document.getElementsByClassName('bolita')
  
    if (n > slides.length) {
        slideIndex = 1
        }
  
    if (n < 1) {
        slideIndex = slides.length
        }
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    for (i = 0; i < bolitas.length; i++) {
        bolitas[i].className = bolitas[i].className.replace(" active", "");
    }
  
    slides[slideIndex-1].style.display = "block";
    bolitas[slideIndex-1].className += " active";
  }
  
  showSlides(slideIndex);
  
  setInterval(() => {
    showSlides(slideIndex)
    // console.log(slideIndex)
    slideIndex++
  }, 6000)