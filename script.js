let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasMaximas = 10;
let tentativasRestantes = tentativasMaximas;

document.getElementById("tentativas").innerText =
    "Tentativas restantes: " + tentativasRestantes;

function chutar() {
    let input = document.getElementById("palpite");
    let palpite = Number(input.value);
    let mensagem = document.getElementById("mensagem");

    // Validação
    if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
        mensagem.innerText = "Digite um número válido entre 1 e 100!";
        return;
    }

    // Lógica do jogo
    if (palpite === numeroSecreto) {
        mensagem.innerText = "🎉 Você acertou!";
        desabilitarJogo();
        return;
    } else if (palpite < numeroSecreto) {
        mensagem.innerText = "🔼 O número secreto é maior.";
    } else {
        mensagem.innerText = "🔽 O número secreto é menor.";
    }

    tentativasRestantes--;

    document.getElementById("tentativas").innerText =
        "Tentativas restantes: " + tentativasRestantes;

    if (tentativasRestantes === 0) {
        mensagem.innerText =
            "❌ Você perdeu! O número secreto era " + numeroSecreto;
        desabilitarJogo();
    }

    input.value = "";
}

function desabilitarJogo() {
    document.getElementById("palpite").disabled = true;
}