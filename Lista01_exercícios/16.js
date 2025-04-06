// 15. Compare 3 lados de um triângulo para saber se é Isósceles, equilátero ou escaleno.

let lado1 = 3
let lado2 = 0
let lado3 = 1

if (lado1 == lado2 && lado2 == lado3){
    console.log("Equilátero")
}
    else if (lado1 == lado2 && lado2 != lado3){
        console.log("Isósceles")
    } 
        else if (lado2 == lado3 && lado2 != lado1){
            console.log("IsoIsósceles")
        }
            else if (lado3 == lado1 && lado1 != lado2){
                console.log("IsoIsósceles")
            } 
        else{
            console.log("escaleno")
        }