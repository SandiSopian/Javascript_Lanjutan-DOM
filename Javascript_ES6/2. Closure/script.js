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

// ---------------------------------------
// 2.2 CLOSURE
// Manfaat closure
// 1. Membuat function factory
// 2. Membuat private method

// function init() {
//   //   let nama = "Sandi";
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let panggilNama = init();
// panggilNama("sandi");

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamaSiang = ucapkanSalam("Siang");
// let selamaMalam = ucapkanSalam("Malam");

// selamatPagi("Karin");
// selamaMalam("Hustle");

// console.dir(selamaMalam);

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
