alert ('Insira os valores dos itens')

let precoItem1 = parseFloat(prompt('Insira o preço do primeiro item'));
let precoItem2 = parseFloat(prompt('Insira o preço do segundo item'));
let precoItem3 = parseFloat(prompt('Insira o preço do terceiro item'));

let valorTotal = precoItem1 + precoItem2 + precoItem3;
console.log(valorTotal);

alert (`O valor total é ${valorTotal}`);