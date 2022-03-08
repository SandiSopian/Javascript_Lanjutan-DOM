// Destructuring Variable / Assignment
// const perkenalan = ["Halo", "nama", "saya", "sandi"];

// const [salam, satu, dua, nama] = perkenalan;
// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//   nama: "sandi",
//   umur: 29,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({ nama, umur } = { nama: "sandi", umur: 29 });
// console.log(nama);

// Assign ke variable baru
// const mhs = {
//   nama: "sandi",
//   umur: 29,
// };

// const { nama: n, umur: u } = mhs;
// console.log(nama);

// Memberikan Default value
// const mhs = {
//   nama: "sandi",
//   umur: 29,
// };

// const { nama, umur, email = "shunasand53@gmail.com" } = mhs;
// console.log(email);

// Memberi nilai default + assign ke variable baru
// const mhs = {
//   nama: "sandi",
//   umur: 29,
//   email: "shunasand53@gmail.com",
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(n, u, e);

// Rest Parameters
// const mhs = {
//   nama: "sandi",
//   umur: 29,
//   email: "shunasand53@gmail.com",
// };

// const { nama, ...value } = mhs;
// console.log(value);

// Mengambil field pda object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "sandi",
  umur: 29,
  email: "shunasand53@gmail.com",
};

function getIdMhs({ id, nama }) {
  return id, nama;
}

console.log(getIdMhs(mhs));
