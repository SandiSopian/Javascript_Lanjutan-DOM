// Menggunakan jquery untuk memanggil API
// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=6a247419&s=avengers",
//     succes: movies => console.log(movies)
// });

// Menggunakan vanila javasript untuk memanggil API
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("GET", "http://www.omdbapi.com/?apikey=6a247419&s=avengers");
// xhr.send();

// Menggunakan fetch untuk memanggil API
// fetch("http://www.omdbapi.com/?apikey=6a247419&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// PROMISE
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then) jika terpenuhi (resolve)
// aksi (catch) jika tidak terpenuhi (reject)

// contoh 1 (tanpa melakukan pemanggilan ke API)
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati");
//   } else {
//     reject("Ingkar janji..");
//   }
// });

// janji1
// .then((response) => console.log("OK! :" + response))
// .catch((response) => console.log("NOT OK! :" + response));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("Tidak ditepati setelah beberapa waktu");
//     }, 2000);
//   }
// });

// console.log("mulai");
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu!"))
//   .then((response) => console.log("OK! :" + response))
//   .catch((response) => console.log("NOT OK! :" + response));
// console.log("selesai");

// Promise.all
// untuk menjalakan beberapa promise sekaligus
const film = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve([
      {
        judul: "Spiderman",
        sutradara: "Horas",
        pemeran: "Tobby, Mary",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temp: 26,
        kondisi: "cerah berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
