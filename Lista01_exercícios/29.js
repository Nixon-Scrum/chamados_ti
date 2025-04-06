// 29. Encontre o primeiro múltiplo de 7 maior que 50 usando um loop while.

//Número é multiplo de 7 => numero % 7 == 0
// numero > 50 ? "Encontrei: "+numero:"Não encontrei"

contador = 0 //iniciando a variável 
while (contador <= 100) {
   contador += 7
    if(contador > 50)
    {
        console.log("Encontrei o número: "+contador)
        break
    }
}