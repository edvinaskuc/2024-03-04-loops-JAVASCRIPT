// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.

// function countTwo() {
//   for (let i = 1; i <= 100; i++) {
//     let rezultatas = i * 2;
//     console.log(rezultatas);
//   }
// }
// countTwo();

// function countFive() {
//   for (let i = 1; i <= 100; i++) {
//     let rezultatas = i * 5;
//     console.log(rezultatas);
//   }
// }

// countFive();

// function addplus() {
//   for (let i = 1; i <= 100; i++) {
//     let rezultatas = i + 5;
//     console.log(rezultatas);
//   }
// }

// addplus();

// function minus() {
//   for (let i = 1; i <= 100; i++) {
//     let rezultatas = i - 2;
//     console.log(rezultatas);
//   }
// }

// minus();

// function kvadratu() {
//   for (let i = 1; i <= 100; i++) {
//     let rezultatas = i ** 2 ;
//     console.log(rezultatas);
//   }
// }

// kvadratu();

// function kubu() {
//   for (let i = 1; i <= 100; i++) {
//     let rezultatas = Math.pow(i, 3)
//     console.log(rezultatas);
//   }
// }

// kubu();

// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.

// function countTwo() {
//   for (let i = 100; i >= 1; i--) {
//     let rezultatas = i * 2;
//     console.log(rezultatas);
//   }
// }
// countTwo();

// function countFive() {
//   for (let i = 100; i >= 1; i--) {
//     let rezultatas = i * 5;
//     console.log(rezultatas);
//   }
// }

// countFive();

// function addplus() {
//   for (let i = 100; i >= 1; i--) {
//     let rezultatas = i + 5;
//     console.log(rezultatas);
//   }
// }

// addplus();

// function minus() {
//   for (let i = 100; i >= 1; i--) {
//     let rezultatas = i - 2;
//     console.log(rezultatas);
//   }
// }

// minus();

// function kvadratu() {
//   for (let i = 100; i >= 1; i--) {
//     let rezultatas = i ** 2;
//     console.log(rezultatas);
//   }
// }

// kvadratu();

// function kubu() {
//   for (let i = 100; i >= 100; i--) {
//     let rezultatas = Math.pow(i, 3);
//     console.log(rezultatas);
//   }
// }

// kubu();

// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.:
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.

function countTwo() {
  for (let i = 1; i <= 100; i++) {
    let rezultatas = i * 2;
    console.log(i + " * 2 = " + rezultatas);
  }
}
countTwo();
