const nomeInput = document.querySelector("#nome-heroi")
const expInput = document.querySelector("#xp-heroi")

function classificar() {
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

    alert(`O herói ${nome} é nível ${nivel}!`)

    nomeInput.value = ""
    expInput.value = ""
}