
document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.getElementById('contenedor-header');
    const contenedor2 = document.getElementById('contenedor_Query');
    const carousel = document.getElementById('carousel_normal');
    const carousel2 = document.getElementById('carousel_responsive');

    const imagenes = document.getElementById("carajo");
    const imagenes2 = document.getElementById("carajo2");

    const media_1 = window.matchMedia('(max-width: 800px)')

    function mq() {
        // Color por defecto
        if (media_1.matches) {

            console.log(carousel);

            imagenes.setAttribute("src", "./img/productosMEDIA.png ")
            imagenes.setAttribute("width", "200px")
            imagenes.setAttribute("height", "100px")
            
            imagenes2.setAttribute("src", "./img/welcomeMEDIA.png")
            imagenes2.setAttribute("width", "200px")
            imagenes2.setAttribute("height", "100px")

            contenedor.setAttribute('style', 'display:none')
            contenedor2.setAttribute('style', 'display:flex')
            carousel.setAttribute('style', 'display:none')
            carousel2.removeAttribute('style')
  
        } else {
            contenedor2.setAttribute('style', 'display:none')
            contenedor.setAttribute('style', 'display:flex')
            carousel.removeAttribute('style')
            carousel2.setAttribute('style', 'display:none')
            
            imagenes.setAttribute("src", "./img/products.png ")
            imagenes.setAttribute("width", "400px")
            imagenes.setAttribute("height", "200px")

            imagenes2.setAttribute("src", "./img/welcome.png ")
            imagenes2.setAttribute("width", "400px")
            imagenes2.setAttribute("height", "200px")
        }
    }

    mq();
   
    window.addEventListener('resize', mq);
});