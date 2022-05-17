let tanya = true;
while (tanya) {
  // menangkap pilihan player
  let p = prompt("pilih: gajah, semut, orang");

  // menangkap pilihan computer
  // membangkitkan bilangan random
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  console.log(comp);

  let hasil = "";
  // menentukan rules

  if (p == comp) {
    hasil = "Seri!";
  } else if (p == "gajah") {
    // if(comp == 'orang') {
    //   hasil = 'Menang!';
    // } else {
    //   hasil = 'Kalah!'
    // }
    hasil = comp == "orang" ? "Menang!" : "Kalah!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "Kalah!" : "Menang!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "Kalah!" : " Menang!";
  } else {
    hasil = "Memasukan pilhan yang salah!";
  }

  // menampilkan hasilnya
  alert("Kamu memilih : " + p + " dan Komputer memilih : " + comp + " \nMaka hasilnya : Kamu " + hasil);

  tanya = confirm("lagi?");
}

alert("Terima kasih sudah bermain...");
