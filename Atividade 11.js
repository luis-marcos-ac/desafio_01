function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;
    return idade;
  }
  
  let anoNascimento = prompt("Insira o ano de nascimento (yyyy)");
  anoNascimento = parseInt(anoNascimento);
  
  let idade = calcularIdade(anoNascimento);
  console.log(idade);