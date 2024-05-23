alert('Insira as respectivas médias escolares do aluno');

let nota1 = parseFloat(prompt('Insira a primeira nota'));
let nota2 = parseFloat(prompt('Insira a segunda nota'));
let nota3 = parseFloat(prompt('Insira a terceira nota'));

let mediaEscolar = (nota1 + nota2 + nota3) / 3;

alert(`A média do aluno é ${mediaEscolar}`);