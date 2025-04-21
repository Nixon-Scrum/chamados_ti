
/*
Escreva uma arrow function que recebe um número e 
retorna se ele é par ou ímpar.
*/

//-------------------------------Função com nome
function verificaPar(numero) {
    return numero % 2 == 0 ? `${numero} é par` : `${numero} é impar` 
}

console.log(verificaPar(114))

//-------------------------------Função anônima
let verificandoPar = function (numero) {
    return numero % 2 == 0 ? `${numero} é par` : `${numero} é impar` 
}

console.log(verificandoPar(5))

//-------------------------------Função Setada
let par = (numero) => (numero % 2 == 0 ? `${numero} é par` : `${numero} é impar`)

console.log(par(9))
   
