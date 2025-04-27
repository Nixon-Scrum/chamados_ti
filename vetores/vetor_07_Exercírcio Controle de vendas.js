/**
 * Desenvolver software para controlar as vendas de onde nós merendamos;
Comida: Salgado de Carne a R$ 6,00 e Salgado de Queijo a R$ 7,00
Bebidas: Refrigerantes a R$ 8,00 , Sucos a R$ 15,00 e Água a R$ 5,00
No fim de cada venda preciso totalizar quantos e quais itens foram vendidos;
E totalizar o financeiro das vendas.

*/


    let comida = ["Pastel de Queijo", "Salgado de Carne", "Salgado de Queijo", "Pastel de Carne"]

    let contPastelQueijo = 0, contSalgadoCarne = 0
    let contSalgadoQueijo = 0, contPastelCarne = 0

    let valorComidas = [6.00, 7.00, 5.00, 4.50]
    let totalValorComidas = 0

    let bebidas = ["Refrigerante", "Suco", "Água"]

    let contRefrigerante=0, contSuco = 0, contAgua = 0

    let valorBebidas = [8.00, 15.00, 5.00]
    let totalValorBebidas = 0

    let index = 0
    let i = 0

    function efetuandoVenda(COMIDAS, BEBIDAS) {
        
        for (index = 0; index <= comida.length; index++) {
            
            if (COMIDAS == comida[index]){
                COMIDAS = comida[index]

                if (COMIDAS == "Pastel de Queijo"){contPastelQueijo++} 
                if (COMIDAS == "Salgado de Carne"){contSalgadoCarne++} 
                if (COMIDAS == "Salgado de Queijo"){contSalgadoQueijo++} 
                if (COMIDAS == "Pastel de Carne"){contPastelCarne++} 
                totalValorComidas +=  valorComidas[index]
                break
            }
            
        }
        
        for (i = 0; i <= bebidas.length; i++) {
                
            if (BEBIDAS == bebidas[i]){
                BEBIDAS = bebidas[i]

                if (BEBIDAS == "Refrigerante"){contRefrigerante++} 
                if (BEBIDAS == "Água"){contAgua++} 
                if (BEBIDAS == "Suco"){contSuco++} 
            
                totalValorBebidas +=  valorBebidas[i]
                break
            }
        }
                let comes = `${COMIDAS}: R$ ${valorComidas[index].toFixed(2)}`
                let bebes = `${BEBIDAS}: R$ ${valorBebidas[i].toFixed(2)}`

                console.log(`${comes} e ${bebes}`)        
    }
                efetuandoVenda("Salgado de Carne", "Suco") // 1
                efetuandoVenda("Pastel de Carne", "Água") // 1
                efetuandoVenda("Salgado de Queijo", "Refrigerante") // 1
                efetuandoVenda("Pastel de Queijo", "Água") // 2
                efetuandoVenda("Pastel de Queijo", "Refrigerante") // 2

            
                console.log(`Qtde de pastel de queijo vendida: ${contPastelQueijo}`)
                console.log(`Qtde de salgado de carne vendida: ${contSalgadoCarne}`)
                console.log(`Qtde de salgado de queijo vendida: ${contSalgadoQueijo}`)
                console.log(`Qtde de pastel de carne vendida: ${contPastelCarne}`)
                console.log("\n")

                console.log(`Qtde de Refrigerante vendido: ${contRefrigerante}`)
                console.log(`Qtde de Água vendida: ${contAgua}`)
                console.log(`Qtde de Suco vendido: ${contSuco}`)
                console.log("\n")

                console.log("Qtde de COMIDAS vendidas: "+
                (contPastelQueijo + contSalgadoCarne + contSalgadoQueijo + contPastelCarne))
                console.log("Total Financeiro (COMIDAS): "+totalValorComidas.toFixed(2))
                console.log("\n")
                console.log("Total de BEBIDAS vendidas): "+
                (contAgua + contRefrigerante + contSuco))
                console.log("Total Financeiro (BEBIDAS): "+totalValorBebidas.toFixed(2))

                console.log("Total faturado: R$"+(totalValorComidas + totalValorBebidas).toFixed(2))










