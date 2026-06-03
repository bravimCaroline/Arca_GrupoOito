document.addEventListener("DOMContentLoaded", () => {
    const successPopup = document.getElementById("successPopup");
    const closeSuccessPopup = document.getElementById("closeSuccessPopup");

    document.getElementById("agndBtn").addEventListener("click", () => {
    abrirPopup();
});

    function abrirPopup() {
        successPopup.style.display = "flex";
    }

    closeSuccessPopup.addEventListener("click", () => {
        successPopup.style.display = "none";
    });

    window.abrirPopup = abrirPopup;
});