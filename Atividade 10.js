let texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let contadorLetrasMaiusculas = 0;

for (let i = 0; i < texto.length; i++) {
  if (texto[i] === texto[i].toUpperCase() && texto[i] !== " ") {
    contadorLetrasMaiusculas++;
  }
}

console.log(contadorLetrasMaiusculas);