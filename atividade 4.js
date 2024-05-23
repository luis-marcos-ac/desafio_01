alert('Identificar os números primos.');

let inserirNumero = prompt('Digite um número para saber se é primo');
let numerosEscolhidos = [23, 16, 11, 8, 19, 14, 5, 21];

let num = parseInt(inserirNumero);

function numeroPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(numeroPrimo(num));
