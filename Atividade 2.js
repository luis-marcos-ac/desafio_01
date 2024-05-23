alert ('por favor, insira seus números escolhidos a seguir.');

let escolha1 = prompt ('insira seu primeiro número escolido');
let escolha2 = prompt ('insira seu segundo número escolido');
let escolha3 = prompt ('insira seu terceiro número escolido');
let escolha4 = prompt ('insira seu quarto número escolido');
let escolha5 = prompt ('insira seu quinto número escolido');
let escolha6 = prompt ('insira seu sexto número escolido');
let escolha7 = prompt ('insira seu último número escolido');

alert (`Os numeros escolhidos foram ${escolha1}, ${escolha2}, ${escolha3}, ${escolha4}, ${escolha5}, ${escolha6} e ${escolha7}`);

let escolhas = (`${escolha1} ${escolha2} ${escolha3} ${escolha4} ${escolha5} ${escolha6} ${escolha7}`);

let maiorNumero = Math.max([escolha1], [escolha2], [escolha3], [escolha4], [escolha5], [escolha6], [escolha7]);

let menorNumero = Math.min([escolha1], [escolha2], [escolha3], [escolha4], [escolha5], [escolha6], [escolha7]);

alert (`O maior número é ${maiorNumero}`)

alert (`O menor número é ${menorNumero}`)