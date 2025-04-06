// 28. Use um loop para calcular o fatorial de um número dado.

fatorial = 1 //Iniciando a variável com valor neutro.
n = 5 //Fatorial de 5 está sendo procurado

for (let i = 1; i <= n; i++) 
    {
       fatorial *= i //fatorial sendo produzido
            
       // 1 x 2 x 3 x 4 x 5 == 120
    
    }
    console.log(`Fatorial de ${n} é ${fatorial}`)