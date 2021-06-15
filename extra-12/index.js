//Extra, Taxa de Juros

let i, n = 24, c = 60000, m = 90000;

i = Math.pow((90.000/60.000), (1/24)) - 1;

//console.log(i);

console.log(`O seu financiamento de R$${c} reais teve uma taxa de juros de ${i} %, pois após ${n} meses você teve que pagar R$${m} reais.`)