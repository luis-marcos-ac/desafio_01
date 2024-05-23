alert('Encontrar o fatorial de 12!')

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }
  
  let fatorialDeDoze = calcularFatorial(12);
  console.log(fatorialDeDoze);
