// Calcular a velocidade média de uma pessoa a partir da distâcia percorrida pela pessoa e pelo tempo que passou:
 
let velocidade, distPercorrida = 5000, tempo = 2400; //seg


velocidade = (distPercorrida / tempo) * 3.6;

console.log(`A velocidade media foi de ${velocidade.toPrecision(3)} km/h`);