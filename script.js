let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];

let nBorlar = [];
let nYoq = [];

for (let soz of letterSearch) {
  if (soz.toLowerCase().includes('n')) {
    nBorlar.push(soz);
  } else {
    nYoq.push(soz);
  }
}

console.log(nBorlar, "'n' harfi ishtirok etgan so'zlar");
console.log(nYoq, "'n' harfi ishtirok etmagan so'zlar");
