
document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.getElementById('contenedor-header');
    const contenedor2 = document.getElementById('contenedor_Query');
   
    const carousel = document.getElementById('carousel_normal');
    const carousel2 = document.getElementById('carousel_responsive');

    const media_1 = window.matchMedia('(max-width: 800px)')

  

    function mq() {
        // Color por defecto
        if (media_1.matches) {

            contenedor.setAttribute('style', 'display:none')
            contenedor2.setAttribute('style', 'display:flex')
            
            carousel.setAttribute('style', 'display:none')
            carousel2.removeAttribute('style')
            
        } else {
            contenedor2.setAttribute('style', 'display:none')
            contenedor.setAttribute('style', 'display:flex')

            
            carousel.removeAttribute('style')
            carousel2.setAttribute('style', 'display:none')
            
        }
    }

    mq();
   
    window.addEventListener('resize', mq);
});