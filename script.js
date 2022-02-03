// Cara untuk membuat Objek pada Javascript
// 1. Object Literal
// Kekurangan = Tidak efektif jika objeknya banyak
// let mahasiswa1 = {
//   nama: "Sandi",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Hallo ${this.nama}, selamat makan!`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Rika",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Hallo ${this.nama}, selamat makan!`);
//   },
// };

// 2. Function Declaration
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur;

//   return mahasiswa;
// }

// let sandi = Mahasiswa("Sandi", 2);
// let rika = Mahasiswa("Rika", 6);

// 3. Constructor Function
//  keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain`);
//   };
// }

// let sandi = new Mahasiswa("Sandi", 10);

// 4. Object Create (Yang paling enak digunakan)
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur`);
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa); // membuat parent object
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let sandi = Mahasiswa("Sandi", 2);
let rika = Mahasiswa("Rika", 6);
