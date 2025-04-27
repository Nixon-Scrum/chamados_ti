const notas = [5.0, 7.5, 4.0, 9.0, 9.9, 9.8, 10.0]

let qtdeNotas = notas.length
let media = 0.0

let somaNotas = notas.reduce(
   (acumulador, valores) => (acumulador + valores)
)

console.log(`Soma das notas: ${somaNotas.toFixed(1)}`)

// Função manual de maior e menor número

 function maiorNota(maior = 0, menor = 10000000000.0) {
    
    notas.forEach(Element => {
        Element >= maior ? maior = Element : "" 
        Element <= menor ? menor = Element : "" 
    });
           console.log(`A maior nota é: ${maior.toFixed(1)}`)
           console.log(`A menor nota é: ${menor.toFixed(1)}`)
           console.log(`Quantidade de notas: ${qtdeNotas}`)
           console.log(`A média: ${(media = somaNotas / qtdeNotas).toFixed(1)}`)
}

maiorNota()