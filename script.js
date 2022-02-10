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
//   let mahasiswa = Object.create(methodMahasiswa); // membuat parent object
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let sandi = Mahasiswa("Sandi", 2);
// let rika = Mahasiswa("Rika", 6);

// -----------------------------------
// Prototype : tipe object prototypel inheritence
//
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat bermain!`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, selamat tidur!`;
// };

// let sandi = new Mahasiswa("Sandi", 10);

// Prototype : tipe object versi Class "yang biasa dipakai"
//
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   }

//   main(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
//   }

//   tidur(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
//   }
// }

// let sandi = new Mahasiswa("Sandi", 10);
// let rika = new Mahasiswa("Rika", 30);

// -----------------------------------
// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE
// Untuk melihat urutan eksekusi program kunjungi https://pythontutor.com/visualize.html#mode=edit

// contoh 1:
// var nama = "Sandi";
// console.log(nama);

// creation phase pada Global Context
// nama var - undifined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// contoh 2
// console.log(sayHello());

// var nama = "Sandi";
// var umur = 29;

// function sayHello() {
//   return `Hallo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// contoh 3
// var nama = "Sandi";
// var username = "@sandi_return0";

// function cetakURL() {
//   console.groupCollapsed(arguments[0]);
//   var instagramURL = "http://instagram.com/";
//   return instagramURL + username;
// }

// console.log(cetakURL('@rika','@yui'));

// contoh 4
// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }

//     c();
//   }
//   b();
// }

// a();

// contoh 5
// function satu() {
//     var nama = 'Sandi';
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Rika';
// satu();
// dua('Yui');
// console.log(nama);
