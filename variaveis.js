let nome = "Nixon"
let sobreNome = "Oliveira Marinho"
let idade = 43
let altura = 1.73
let peso = 98.35
let casado = true
let familia = [
    {
        nome : "Shéslyda",
        parentesco : "Esposa"
    }
]
let familiaa = {
    esposa: {
      nome: "Shéslyda",
      descricao: "Carinhosa, determinada e apaixonada por jardinagem."
    }
}




// Concatenação

console.log("Olá "+nome+" "+sobreNome+", você tem "+idade+" anos"+" e mede "+altura+"m e seu peso é "+peso+"kg.")

// interpolação

console.log(`Olá ${nome} ${sobreNome}, você tem ${idade} anos e mede ${altura}m e seu peso é ${peso}kg.`)

console.log(familia[0])