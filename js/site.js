function openNav() {
    document.querySelector(".top-nav").style.width = "100vw";
    document.querySelector("header").style.width = "0"
}

function closeNav() {
    document.querySelector(".top-nav").style.width = "0";
    document.querySelector("header").style.width = "100vw"
}

var nav = document.getElementById('top-nav'); 
nav.style.backgroundColor = "rgb(23, 23, 23, 0.0)"

window.addEventListener('scroll', function(event) { 
    event.preventDefault();

    if (window.scrollY <= 100) { 
      nav.style.backgroundColor = "rgb(23, 23, 23, 0.0)";
    } else {
      nav.style.backgroundColor = "rgb(23, 23, 23)"

    }
});


var leftArrayItems = [
  document.querySelector('.about'),
  document.querySelector('.services'),
  document.querySelector('.candy'),
  document.querySelector('.clients')
]

ScrollReveal().reveal(leftArrayItems,{delay: 400})