function abrirPopupNoticia(
    titulo,
    texto,
    imagem
){

    document.getElementById("popup-title")
        .textContent = titulo;

    document.getElementById("popup-text")
        .textContent = texto;

    document.getElementById("popup-img")
        .src = imagem;

    document.getElementById("popup-news")
        .classList.add("active");

}

function fecharPopupNoticia(){

    document.getElementById("popup-news")
        .classList.remove("active");

}

const popup =
    document.getElementById("popup-news");

popup.addEventListener("click", e => {

    if(e.target === popup){

        fecharPopupNoticia();

    }

});

