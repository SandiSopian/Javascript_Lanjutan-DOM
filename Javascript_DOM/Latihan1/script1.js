// DOM Selection
// document.getElementById() -> element
// const judul = document.getElementById("judul");
// judul.style.color = "blue";
// judul.style.backgroundColor = "red";
// judul.innerHTML = "Sandi";

// document.getElementByTagName() -> HTMLColletions
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "gray";
// }
// ----
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "60px";

// // document.getElementsByClassName() -> HTMLCollections
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "Waku waku";

// // document.querySelector() -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";
// // ----
// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// //document.querySelectorAll()
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "purple";
// }

// Mengubah document root
const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "orange";
