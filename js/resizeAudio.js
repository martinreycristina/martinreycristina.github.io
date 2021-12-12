// Se ejecuta al cargar la página
window.onload = ()=> {
    resizeAudio();
};

// Se ejecuta al cambiar el tamaño de la ventana
window.onresize = ()=> {
    resizeAudio();
};

// Averigua el ancho de los reproductores en función de su componente padre
function resizeAudio() {
    // Se obtiene el tamaño que poseerán los elementos de audio
    let article = document.getElementsByTagName("article")[0];
    let max_size = window.getComputedStyle(article, null).getPropertyValue("width");

    // Se dota a los elementos de audio del tamaño permitido por el artículo
    let audioElements = document.getElementsByTagName("audio");
    let i;
    for(i = 0; i < audioElements.length; i++){
        audioElements[i].setAttribute("style", "max-width: " + max_size);
    }
}