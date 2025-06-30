const conteudo = document.querySelector("#content")
const conteudoHtml = conteudo.innerHTML

function classificar() {
    const nomeInput = document.querySelector("#nome-heroi")
    const expInput = document.querySelector("#xp-heroi")
    let nome = nomeInput.value
    let exp = expInput.value
    if (nome == "" || exp == "") {
        alert("Preencha todas as informações corretamente!")
        return
    }

    let nivel = ""
    if (exp <= 1000) {
        nivel = "Ferro"
    } else if (exp <= 2000) {
        nivel = "Bronze"
    } else if (exp <= 5000) {
        nivel = "Prata"
    } else if (exp <= 8000) {
        nivel = "Ouro"
    } else if (exp <= 11000) {
        nivel = "Platina"
    } else if (exp <= 15000) {
        nivel = "Radiante"
    } else if (exp <= 20000) {
        nivel = "Imortal"
    } else {
        nivel = "Ascendente"
    }

    let resultsHtml = `<div id="results-container"><h2 id="resultado">O nível de ${nome} é...</h2><p id="nivel-heroi">${nivel}</p></div>`
    conteudo.innerHTML = conteudoHtml + resultsHtml

    nomeInput.value = ""
    expInput.value = ""
}