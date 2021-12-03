const contenedor = document.getElementById('contenedor-header')
const grupo = document.getElementById('grupo2-header')
const lista = document.getElementById('lista-header')
const parrafo = document.getElementById('p-header')
const imagen = document.getElementById('imgNAV');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        imagen.setAttribute('src', './img/logo.png');
        contenedor.classList.replace('contenedor', 'scroll-contenedor')
        grupo.classList.replace('grupo2', 'scroll-grupo2')
        lista.classList.replace('lista', 'scroll-lista')
        

    } else if (window.scrollY == 0) {
        imagen.setAttribute('src', './img/logoBlanco.png');
        contenedor.classList.replace('scroll-contenedor', 'contenedor')
        grupo.classList.replace('scroll-grupo2', 'grupo2')
        lista.classList.replace('scroll-lista', 'lista')
        
    }
    
    
    
})