// Crie uma função que recebe um nome como parâmetro e retorna "Olá, [nome]!"

// ----------------------------------Função com nome
function saudacao(nome) {
    return "Olá "+nome
}

console.log(saudacao("Nixon"))

// ----------------------------------Função sem nome
let saudacaoAnonima = function (nome) {
    return "Olá "+nome
}

console.log(saudacaoAnonima("Nixon"))


// ----------------------------------Função Arrow Function
let saudacaoSetada = (nome) => ("Olá "+nome)

console.log(saudacaoSetada("Nixon"))