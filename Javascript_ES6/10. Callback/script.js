// Callback
// Syncrhonous Callback
// function hallo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukan Nama : ");
//   callback(nama);
// }

// tampilkanPesan(hallo);
// menggunakan 1 arrow function tanpa menggunakan function yang paling atas
// tampilkanPesan((nama) => alert(`Hallo, ${nama}`));

// const mhs = [
//   {
//     nama: "Sandi",
//     nim: "0405160017",
//     email: "shunasand73@gmail.com",
//     jurusan: "Teknik Informatika",
//   },
//   {
//     nama: "Rika",
//     nim: "0405160048",
//     email: "rikachan67@gmail.com",
//     jurusan: "Tata Boga",
//   },
//   {
//     nama: "Doni",
//     nim: "0405160090",
//     email: "doniggpisangakadaobat@gmail.com",
//     jurusan: "Teknik Mesin",
//   },
// ];

// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// Assynchronous Callback
// success dan error adalah function callback
// Menggunakan vanila javascript(javascript murni)
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa(
//   "./Data/mahasiswa.json",
//   (result) => {
//     const mhs = JSON.parse(result);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log("selesai");

// Menggunakan JQuery
console.log("mulai");
$.ajax({
  url: "./Data/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
