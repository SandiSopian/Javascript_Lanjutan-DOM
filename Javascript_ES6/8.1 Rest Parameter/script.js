// Rest Parameter
// Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// function myFunc() {
// menampilkan sisa array sebagai myArgs
//   return `a= ${a}, b= ${b}, myArgs= ${myArgs}`;
// menampilkan semua array sebagai myArgs
//  return myArgs;
// menampilkan arguments sebagai array menggunakan spread operator
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// Menjumlahkan semua parameter
// function jumlahkan(...angka) {
// Menggunakan for..of
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;

// Menggunakan reduce
//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ["Sandi", "Rika", "Doni", "Eriko", "Jeane", "Roy"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// object destructuring
// const team = {
//   pm: "Sandi",
//   frontEnd1: "Rika",
//   frontEnd2: "Doni",
//   backEnd: "Eriko",
//   ux: "Jeane",
//   devOps: "Roy",
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

// filltering
// function filterBy(type, ...values) {
//   return values.filter((v) => typeof v === type);
// }

// console.log(filterBy("string", 1, 2, "Sandi", false, 10, true, "Rika"));
