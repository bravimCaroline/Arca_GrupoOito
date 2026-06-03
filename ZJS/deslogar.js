document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.querySelector(".logout");
    const confirmOverlay = document.getElementById("confirmOverlay");
    const confirmCancel = document.getElementById("confirmCancel");
    const closeConfirm = document.getElementById("closeConfirm");


    logoutBtn.addEventListener("click", (e) => {
        confirmOverlay.style.display = "flex";
    });

    confirmCancel.addEventListener("click", () => {
        window.location.href = "../index.html";
    });

    closeConfirm.addEventListener("click", () => {
        confirmOverlay.style.display = "none";
    });
});