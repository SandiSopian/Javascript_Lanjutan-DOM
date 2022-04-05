// Destructuring

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// // destructuring dari return value
// // const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// // console.log(jumlah);
// // console.log(kali);

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(kurang);

// Menggunakan object untuk return value agar value tidak tertukar
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);

// Destructuring function arguments
const mhs1 = {
  nama: "sandi",
  umur: 29,
  email: "sandi@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// tanpa menggunakan destructuring function
// function cetakMhs(mhs) {
//   return `Hallo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

// dengan menggunakan destructuring function object didalam object
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Hallo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));
