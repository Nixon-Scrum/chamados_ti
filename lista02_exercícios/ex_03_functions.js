
/*
Declare uma variável global e tente acessá-la dentro de uma função. 
Depois,crie uma variável dentro da função e tente acessá-la fora dela.
*/

//-------------------------------Função com nome
let minhaGlobal = "Sou acessada de qualquer lugar."

function acessarGlobal() {
    return minhaGlobal
    let minhaLocal = "Estou dentro da função."
}

console.log(acessarGlobal())
//a baixo, a variável local que não pode ser acessada
// console.log("Tentando acessar "+ minhaLocal)
   

// -------------------------------Função sem nome
let acessarGlobalAnonima = function () {
    return minhaGlobal
    // let minhaLocalAnonima = "Estou dentro da função."
}

console.log(acessarGlobalAnonima())
//a baixo, a variável local que não pode ser acessada
// console.log("Tentando acessar "+ minhaLocalAnonima)


// -------------------------------Função Arrow Function
let acessarGlobaSetada = () => {
    let localSetada = "Sou Local"
    return `${minhaGlobal}`
}

console.log(acessarGlobaSetada())
//a baixo, a variável local que não pode ser acessada
// console.log("Tentando acessar "+ localSetada) 