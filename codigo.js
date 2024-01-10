 /* desplazamiento menú */
 
 document.addEventListener("DOMContentLoaded", function() {
              var elementos = document.querySelectorAll('.portada_paginas a');
        
              window.addEventListener('scroll', function() {
                elementos.forEach(function(elemento) {
                  var bounding = elemento.getBoundingClientRect();
                  if (bounding.top < window.innerHeight) {
                    elemento.classList.add('desplazado');
                  } else {
                    elemento.classList.remove('desplazado');
                  }
                });
              });
            });