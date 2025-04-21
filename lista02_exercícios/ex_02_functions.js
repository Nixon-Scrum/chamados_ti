// Faça uma função que recebe dois números e retorna o maior deles.

// ----------------------------------Função com nome
function maior(num1, num2) {
    return num1 > num2 ? num2 > num1 : num2 > num1 ? num2 : "Números são iguais"
}

console.log(maior(10, 40))

// ----------------------------------Função sem nome
let maiorSemNome = function (num1, num2) {
    return num1 > num2 ? num2 > num1 : num2 > num1 ? num2 : "Números são iguais"
}

console.log(maiorSemNome(10, 40))


// ----------------------------------Função Arrow Function
let maiorSetada = (num1, num2) => (num1 > num2 ? num2 > num1 : num2 > num1 ? num2 : "Números são iguais")
console.log(maiorSetada(10, 40))