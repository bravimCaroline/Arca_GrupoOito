const perfilBtn = document.getElementById("perfilBtn");

const loginOverlay = document.getElementById("loginOverlay");
const confirmOverlay = document.getElementById("confirmOverlay");

const closeLogin = document.getElementById("closeLogin");

const loginScreen = document.getElementById("loginScreen");
const cadastroPF = document.getElementById("cadastroPF");
const cadastroPJ = document.getElementById("cadastroPJ");

const openCadastro = document.getElementById("openCadastro");

const googleLogin = document.getElementById("googleLogin");

const pjBtn = document.getElementById("pjBtn");
const pfBtn = document.getElementById("pfBtn");

const backToLoginPF = document.getElementById("backToLoginPF");
const backToLoginPJ = document.getElementById("backToLoginPJ");

const confirmCancel = document.getElementById("confirmCancel");
const closeConfirm = document.getElementById("closeConfirm");

const loginBtn = document.getElementById("loginBtn");

function mostrarLogin() {
    loginScreen.classList.remove("hidden");
    cadastroPF.classList.add("hidden");
    cadastroPJ.classList.add("hidden");
}

function mostrarPF() {
    loginScreen.classList.add("hidden");
    cadastroPF.classList.remove("hidden");
    cadastroPJ.classList.add("hidden");
}

function mostrarPJ() {
    loginScreen.classList.add("hidden");
    cadastroPF.classList.add("hidden");
    cadastroPJ.classList.remove("hidden");
}

function fecharLogin() {
    loginOverlay.classList.remove("active");
    mostrarLogin();
}

function logar() {
    const login = document.getElementById("Login").value;
    const senha = document.getElementById("pass").value;

    if (!login || !senha) {
        alert("Preencha usuário e senha.");
        return;
    }

    else if (login === "tutor" && senha === "123456") {
        window.location.href = ("./TUTOR/perfil.html");
        return;
    }

    else if (login === "Ong" && senha === "ong$-135") {
        window.location.href = ("./ONGAR/perfil.html");
        return;
    }

    else if (login === "candidato" && senha === "cand!098") {
        window.location.href = ("./CANDIDATO/perfil.html");
        return;
    }

    else if (login === "prefeitura" && senha === "pref@456") {
        window.location.href = ("./PREFEITURA/perfil.html");
        return;
    }

    else { alert("Usuário ou senha inválidos.") };
}

if (perfilBtn) {
    perfilBtn.addEventListener("click", (event) => {
        event.preventDefault();
        loginOverlay.classList.add("active");
        mostrarLogin();
    });
}

if (closeLogin) {
    closeLogin.addEventListener("click", fecharLogin);
}

if (loginOverlay) {
    loginOverlay.addEventListener("click", (event) => {
        if (event.target === loginOverlay) {
            fecharLogin();
        }
    });
}

if (openCadastro) {
    openCadastro.addEventListener("click", mostrarPF);
}

if (pjBtn) {
    pjBtn.addEventListener("click", mostrarPJ);
}

if (pfBtn) {
    pfBtn.addEventListener("click", mostrarPF);
}

if (backToLoginPF) {
    backToLoginPF.addEventListener("click", mostrarLogin);
}

if (backToLoginPJ) {
    backToLoginPJ.addEventListener("click", mostrarLogin);
}

if (loginBtn) {
    loginBtn.addEventListener("click", logar);
}

if (googleLogin) {
    googleLogin.addEventListener("click", () => {
        alert("Login com Google ainda não disponível.");
    });
}

document.querySelectorAll(".cancelCadastro")
.forEach(botao => {
    botao.addEventListener("click", () => {
        confirmOverlay.classList.add("active");
    });
});

if (closeConfirm) {
    closeConfirm.addEventListener("click", () => {
        confirmOverlay.classList.remove("active");
    });
}

if (confirmCancel) {
    confirmCancel.addEventListener("click", () => {
        confirmOverlay.classList.remove("active");
        mostrarLogin();
    });
}

if (confirmOverlay) {
    confirmOverlay.addEventListener("click", (event) => {
        if (event.target === confirmOverlay) {
            confirmOverlay.classList.remove("active");
        }
    });
}

document.getElementById("criarPF")?.addEventListener("click", () => {
    const campos = cadastroPF.querySelectorAll("input");
    const vazio = [...campos].some(
        input => !input.value.trim()
    );

    if (vazio) {
        alert("Preencha todos os campos.");
        return;
    }

    alert("Conta criada com sucesso.");
});

document.getElementById("criarPJ")?.addEventListener("click", () => {
    const campos = cadastroPJ.querySelectorAll("input");
    const vazio = [...campos].some(
        input => !input.value.trim()
    );

    if (vazio) {
        alert("Preencha todos os campos.");
        return;
    }

    alert("Conta criada com sucesso.");
});
