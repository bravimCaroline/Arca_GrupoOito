function abrirPopupONG(
    nome,
    local,
    descricao,
    imagem
){

    document.getElementById("popup-nome")
        .textContent = nome;

    document.getElementById("popup-local")
        .textContent = local;

    document.getElementById("popup-desc")
        .textContent = descricao;

    document.getElementById("popup-img")
        .src = imagem;

    document.getElementById("popup-ong")
        .classList.add("active");

}

function fecharPopupONG(){

    document.getElementById("popup-ong")
        .classList.remove("active");

}

const popup =
    document.getElementById("popup-ong");

popup.addEventListener("click", e => {

    if(e.target === popup){

        fecharPopupONG();

    }

});