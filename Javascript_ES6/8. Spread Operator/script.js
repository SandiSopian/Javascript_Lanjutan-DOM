// Spread Operator
// memecah (expand) iterabels menjadi single element
// iterabels object contohnya: String, Array, Arguments/Nodelist, TypedArray, Map, Set, User-defined iterabels

// const mhs = ["Sandi", "Rika", "Doni"];
// console.log(...mhs);

// Menggabungkan 2 atau lebih Array
// const mhs = ["Sandi", "Rika", "Doni"];
// const dosen = ["Jaka", "Siti", "Gery"];
// const orang = [...mhs, "Anwar", ...dosen];
// console.log(orang);

// Meng-copy Arrays
// Array awal tidak berubah meskipun ada timpahan array berikutnya
// const mhs = ["Sandi", "Rika", "Doni"];
// const mhs1 = [...mhs];
// mhs1[0] = "Senja";
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");
// menggunakan looping for
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// Menggunakan Map
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
