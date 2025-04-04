// Função nominada

function soma(num01, num02){
    return num01 + num02
}
console.log(soma(5, 10))

// Função sem nome

let somar = function(a, b){
    return a + b
}
console.log(somar(6, 7))

// função com seta

let somando = (x, y) => (x + y)

console.log(somando(10, 20))
