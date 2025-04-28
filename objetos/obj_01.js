/**
 * Desenvolver software para controlar as vendas de onde nós merendamos;
Comida: Salgado de Carne a R$ 6,00 e Salgado de Queijo a R$ 7,00
Bebidas: Refrigerantes a R$ 8,00 , Sucos a R$ 15,00 e Água a R$ 5,00
No fim de cada venda preciso totalizar quantos e quais itens foram vendidos;
E totalizar o financeiro das vendas.

*/    
    
    const lanche = {
        pastelQueijo: 6.00, salgadoCarne: 7.00, salgadoQueijo: 5.00, pastelCarne: 4.50,
        Refrigerante: 8.00, Suco: 15.00, Água: 5.00
    }

    let valorTotal = 0
    let qtdeTotal = 0
    
    let qtdePastelQueijo = 0, qtdeSalgadoCarne = 0, qtdeSalgadoQueijo = 0 
    let qtdePastelCarne = 0, qtdeRefrigerante = 0, qtdeSuco = 0, qtdeAgua = 0



    function efetuandoVenda(produto, qtde) {
        Object.entries(lanche).forEach(([chave, valor]) => {
            
            if (chave == produto) {
                let total = valor * qtde
                console.log(`${qtde} ${chave} - R$ ${valor.toFixed(2)} = R$ ${total.toFixed(2)}`)
                valorTotal = valorTotal + total
                qtdeTotal = qtdeTotal + qtde

                 chave == "pastelQueijo" ? qtdePastelQueijo += qtde : null
                 chave == "salgadoCarne" ? qtdeSalgadoCarne += qtde : null
                 chave == "salgadoQueijo" ? qtdeSalgadoQueijo += qtde : null
                 chave == "pastelCarne" ?  qtdePastelCarne += qtde : null
                 chave == "Refrigerante" ?  qtdeRefrigerante += qtde : null
                 chave == "Água" ?  qtdeAgua += qtde : null  
                 chave == "Suco" ?  qtdeSuco += qtde : null    
            }   
                
        });
    console.log("-------------------------------------------------")
    }

    console.log("-----------VENDAS SENDO EFETUADAS----------------")
    efetuandoVenda("salgadoCarne", 2)
    efetuandoVenda("salgadoQueijo", 2)
    efetuandoVenda("salgadoQueijo", 2)
    efetuandoVenda("Refrigerante", 2)
    efetuandoVenda("Água", 1)
    efetuandoVenda("Suco", 2)
    efetuandoVenda("pastelCarne", 2)
    efetuandoVenda("pastelQueijo", 1)

    console.log("\n-----------RELATÓRIO QUANTITATIVO POR ITEM-----")
    console.log(`Pastel de Queijo: ${qtdePastelQueijo}`)
    console.log(`Salgado de Carne: ${qtdeSalgadoCarne}`)
    console.log(`Salgado de Queijo: ${qtdeSalgadoQueijo}`)
    console.log(`Pastel de Carne: ${qtdePastelCarne}`)
    console.log(`Refrigerante: ${qtdeRefrigerante}`)
    console.log(`Suco: ${qtdeSuco}`)
    console.log(`Água: ${qtdeAgua}`)
    
    console.log("\n-----------VALOR FINANCEIRO ATUALIZADO---------")
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`)

    console.log("\n-----------VALOR QUANTITATIVO ATUALIZADO-------")
    console.log(`Quantidade total: ${qtdeTotal}`)