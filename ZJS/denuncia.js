const form = document.getElementById("form-denuncia");

form.addEventListener("submit", function(e){

    e.preventDefault();

    document
        .getElementById("popup-sucesso")
        .classList.add("active");

    form.reset();

});

const popup = document.getElementById("popup-sucesso");

popup.addEventListener("click", e => {

    if(e.target === popup){

        popup.classList.remove("active");

    }

});