//Área totaal de um clindro

let At1, aT, aB, aL, r = 3, h = 6, pi = 3.14;

aB = 2 * pi * Math.pow(r,2);

aL = 2 * pi * r * h;

aT = 2 * pi * r * ( r + h);

//At1= 


console.log(`A área de um cilindro é de: ${2 * (aB + aL).toPrecision(3)}`);