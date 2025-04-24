let Pastelaria = 
[
    "Refrigerante 600ml", "Refrigerante 2L", "Água Tônica", "Água Com Gás", 
    "Pastel de Carne", "Pastel de Queijo", "Pastel de Mixto"
]

let i = 1, j = 1

console.log("console.log(Pastelaria)")

console.log(Pastelaria)

console.log("\nconsole.log(`${i++}º ${Pastelaria}`) \n")

console.log(`${i++}º ${Pastelaria}`)

console.log("\nPastelaria.forEach(produtos => {console.log(`${j++}º. ${produtos}`)}); \n")


Pastelaria.forEach(produtos => {console.log(`${j++}º. ${produtos}`)});

