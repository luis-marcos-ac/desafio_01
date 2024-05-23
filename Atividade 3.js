alert('Ordenar os frascos.');

let frascos = [12, 5, 23, 17, 8, 14, 3, 19];

frascos.sort(function compareFn(a, b) {
      return a - b;
});

console.log(frascos);
