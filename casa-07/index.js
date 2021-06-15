//Casos de COVID-19

// Po = População inicial  de pessoas infectadas;
// x = quantidade de pessoas para as uais um paciente infectado pode transmirtir;
//t = tempo percorrido;

let P, Po = 100, x = 4, t = 100; 

P = Po * Math.pow(100, 100/7);

console.log(`A quantidade de pessoas infectadas após decorrido o tempo é de: ${(P.toPrecision(4))}`);