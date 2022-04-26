// ------------------ DOM Manipulation -------------------------
// ------------------ innerHTML -------------------------
// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Sandi</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "hello world";

// ------------------ element.style ---------------------
// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "green";

// element.getAttribute("") / element.setAttribute("") / element.removeAttribute("")
// const judul = document.getElementsByTagName("h1")[0];

// judul.setAttribute("name", "sandi");
// judul.getAttribute("id");
// judul.removeAttribute("id");

// ------------------------- element.classList -------------------------
// const p2 = document.querySelector(".p2");
// untuk menambahkan class
// p2.classList.add("label");
// untuk menghapus class
// p2.classList.remove("label");
// untuk menambahkan class jika tidak ada dan menghapus jika ada
// p2.classList.toggle("label");
// untuk melihat item / jumlah class
// p2.classList.item("2");
// untuk menanyakan class apakah ada atau tidak?
// p2.classList.contains("label");
// untuk mengganti class yang sudah ada
// p2.classList.replace("label", "labels");

// ------------------------- Node Manipulation -------------------------
// buat element baru
const pBaru = document.createElement("p");
const textPBaru = document.createTextNode("Paragraf Baru");
// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru);
// simpan pBaru di akhir Section A
const sectionA = document.getElementById("a");
// simpan ke akhir dari element tersebut
sectionA.appendChild(pBaru);

// // ----------------- insertBefore --------------------
const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(textLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
// simpan ke akhir dari element tersebut
ul.insertBefore(liBaru, li2);

// ----------------- removeChild --------------------
// const sectionA = document.getElementById("a");
const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

// ----------------- replaceChild --------------------
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const textH2Baru = document.createTextNode("Judul baru!");

h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightblue";
liBaru.style.backgroundColor = "lightblue";
h2Baru.style.backgroundColor = "lightblue";
