// for...of
// Looping Array
// const mhs = ["Sandi", "Rika", "Doni"];
//Menggunakan for biasa
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// Menggunakan forEach
// mhs.forEach((m) => console.log(m));

// Menggunakan for...of
// for (const m of mhs) {
//   console.log(m);
// }

// Looping String
// const nama = "Sandi";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["Sandi", "Rika", "Doni"];
// Menggunakan forEach
// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`)); // parameter kedua (i) akan menjadi index

// Menggunakan for...of
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`); // parameter kedua (i) akan menjadi index
// }

// Nodelist
// const liNama = document.querySelectorAll(".nama");
// // Menggunakan forEach
// liNama.forEach((n) => console.log(n.textContent));
// // Menggunakan for...of
// for (n of liNama) {
//   console.log(n.textContent);
// }

// arguments
// function jumlahkanAngka() {
//   // return arguments.reduce((a, i) => a + i); // tidak bisa menggunakan reduce
//   // arguments.forEach(a => jumlah += a); // tidak bisa menggunakan forEach
//   let jumlah = 0;
//   // Menggunakan for...of
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// ---------------------------------------------------------
// for...in
const mhs = {
  nama: "Sandi",
  umur: 29,
  email: "sandi@gmail.com",
};

for (m in mhs) {
  console.log(mhs[m]);
}
