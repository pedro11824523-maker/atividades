let hora = 14; //imagine que são 14h (2 da tarde) 
if (hora < 12) { // Verifica se a hora é menor que 12
    console.log ("Bom dia") // Se for menor que 12, exibe "Bom dia"
} else if (hora < 18) { // Caso não seja menor que 12, verifica se é menor que 18
    console.log ("Boa Tarde") // Se estiver entre 12 e 17, exibe "Boa Tarde"
 } else // Se nenhuma das condições anteriores for verdadeira
console.log ("Boa Noite") // Exibe "Boa Noite"
