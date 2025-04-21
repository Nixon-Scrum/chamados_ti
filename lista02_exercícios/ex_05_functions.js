
/*
Escreva uma função para descobrir o valor de Delta (Δ= b²−4ac).
*/

//-------------------------------Função com nome
function calculoDelta(A, B, C) {
    return  Math.pow(B, 2) - 4 * A * C
}

let a = 2, b = -4, c = -6

let valorDelta = calculoDelta(a, b, c)

function X1eX2(B, A) {
    let x = (- B + Math.sqrt(valorDelta)) / 2 * A
    let xx = (- B - Math.sqrt(valorDelta)) / 2 * A

    return `X' = ${x} e X" = ${xx}`
}
console.log(`Resultado da Função Tradicional com nome:`)

console.log(`Valor de Delta = ${valorDelta}, ${X1eX2(b, a)}`)

//-------------------------------Função Anônima
let calculoDeltaAnonima = function (A, B, C) {
    return  Math.pow(B, 2) - 4 * A * C
}

let valorDeltaAnonima = calculoDeltaAnonima(a, b, c)

function X1eX2Anonima(B, Delta, A) {
    let x = (- B + Math.sqrt(Delta)) / (2 * A)
    let xx = (- B - Math.sqrt(Delta)) / (2 * A)

    return `X' = ${x} e X" = ${xx}`
}

console.log(`Resultado da Função Anônima:`)
console.log(`Valor de Delta = ${valorDeltaAnonima}, ${X1eX2Anonima(b, valorDelta, a)}`)


//-------------------------------Função Setada
let valorDeltaSetada = calculoDeltaAnonima(a, b, c)

let X1eX2Setada = (B, Delta, A) => {
    let x = (- B + Math.sqrt(Delta)) / (2 * A)
    let xx = (- B - Math.sqrt(Delta)) / (2 * A)

    return `X' = ${x} e X" = ${xx}`
}

console.log(`Resultado da Função Setada:`)
console.log(`Valor de Delta = ${valorDeltaSetada}, ${X1eX2Setada(b, valorDelta, a)}`)
