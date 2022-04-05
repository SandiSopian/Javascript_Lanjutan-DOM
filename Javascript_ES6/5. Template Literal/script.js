// Template Literals / Template String
// const nama = "sand";
// const umur = 29;
// console.log(`Hallo, nama saya ${nama}, dan saya ${umur} tahun.`);
// // menggunakan concate
// console.log("Hallo, nama saya " + nama + ", dan saya " + umur + " tahun.");

// Embedded Expressions
// Expressions
// console.log(`${1 + 1}`);
// Functions
// console.log(`${alert("Hallo World")}`);
// Ternary Operation
// const x = 11;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragments
// const mhs = {
//   nama: "Sandi",
//   umur: 33,
//   nrp: "4013118",
//   email: "shunasand53@gmail.com",
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;
// console.log(el);

//----------------------------------------------------------------

// 1. HTML Fragments
// const mhs = {
//   nama: "Sandi",
//   umur: 33,
//   nrp: "4013118",
//   email: "shunasand53@gmail.com",
// };
// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. Looping
// const mhs = [
//   {
//     nama: "Sandi",
//     email: "shunasand53@gmail.com",
//   },
//   {
//     nama: "Rika",
//     email: "Rika@gmail.com",
//   },
//   {
//     nama: "Suni",
//     email: "Suni@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
// ${mhs.map(
//     (m) =>
//       `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`
//   )
//   .join("")}
//     </div>`;

// 3. Conditionals
// Ternary
// const lagu = {
//   judul: "Tak Gendong",
//   penyanyi: "Mbah Surip",
//   feat: "Peterpan",
// };

// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
// </ul>
// </div>`;

// 4. Nested
// HTML Fragments bersarang
// const mhs = {
//   nama: "Sandi",
//   semester: 5,
//   mataKuliah: ["Rekayasa Web", "Analisis dan Peracangan Sistem Informasi", "Pemrograman Sistem Interaktif", "Perancangan Sistem Berorientasi Object"],
// };

// function cetakMataKuliah(mataKuliah) {
//   return `
//     <ol>
//     ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
//     </ol>
//     `; // join untuk menggabungkan string dan menghilangkan koma
// }

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="semester">Semester : ${mhs.semester}</span>
// <h4>Mata Kuliah :</h4>
// ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = el;

// ----------------------------------------------------------------

// Tagged Templates
// const nama = "Sandi";
// const umur = 29;

// function coba(string, ...values) {
//   let result = "";
//   string.forEach((str, i) => {
//     result += `${str}${values[i] || ""}`;
//   });
//   return result;

// return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
// }

// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Hightlight
// const nama = "Sandi";
// const umur = 29;
// const email = "shunasand53@gmail.com";

// function hightlight(strings, ...values) {
//   return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
// }

// const str = hightlight`Hallo, nama saya ${nama}, saya ${umur} tahun, email saya ${email}`;
// console.log(str);

// document.body.innerHTML = str;

// Penggunaan Lain dari Tagged Template
// 1. Escaping HTML Tags
// 2. Translation $ Internationalization
// 3. Styled Components

// 1. Escaping HTML Tags ( Membersihkan elemen )
// function sanitize(strings, ...values) {
//   return DOMPurifier.sanitize(aboutMe);
// }

// const name = `Peterpan Noah`;
// const aboutMe = `I Love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('I hacked you. Haha');" />`;

// const html = sanitize`
// <h3>${name}</h3>
// <p>${aboutMe}</p>
// `;

// 2. Translation $ Internationalization
// const htm = i18n `Hello ${name}, you have ${amount}: c in your bank account.`)

// Hallo Steffen, Sie haben US$1,250.33 auf Ihrem Bankkonto.

// 3. Styled Components
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
