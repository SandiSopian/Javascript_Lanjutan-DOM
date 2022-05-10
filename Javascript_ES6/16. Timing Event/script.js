// --------- setTimeOut ---------
// const tes = setTimeout(function () {
//   console.log("OK!");
// }, 10000);

// const tombol = document.getElementById("tombol");
// tombol.addEventListener("click", function () {
//   clearTimeout(tes);
//   console.log("selesai");
// });

// --------- setInterval ---------
// const tes = setInterval(function () {
//   console.log("OK!");
// }, 2000);

// const tombol = document.getElementById("tombol");
// tombol.addEventListener("click", function () {
//   clearInterval(tes);
//   console.log("selesai");
// });

// --------- Program Hitung Mundur ---------
const tanggalTujuan = new Date("April 26, 2022 22:15:00").getTime();

const hitungMundur = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;

  // 1000 milidetik 60detik 60menit 24jam = 1 hari
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  // tampilkan teks
  const teks = document.getElementById("teks");
  teks.innerHTML = " Waktu anda tinggal :  " + hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik lagi! ";

  if (selisih <= 0) {
    clearInterval(hitungMundur);
    teks.innerHTML = "Waktu anda habis!";
  }
}, 1000);
