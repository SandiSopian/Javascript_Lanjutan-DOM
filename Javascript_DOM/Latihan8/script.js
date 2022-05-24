// // Event Handling
// // const close = document.querySelector(".close");
// // const card = document.querySelector(".card");

// // close.addEventListener("click", function () {
// //   card.style.display = "none";
// // });

// // DOM Traversal
// // Method = Hasil
// // parentNode = node
// // parentElement = element
// // nextSibling = node
// // nextElementSibling = element
// // previousSibling = node
// // previousElementSibling = element

// const close = document.querySelectorAll(".close");

// // for (let i = 0; i < close.length; i++) {
// //   close[i].addEventListener("click", function (e) {
// //     e.target.parentElement.style.display = "none";
// //   });
// // }

// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     // untuk menghilangkan fungsi default sebuah event
//     e.preventDefault();
//     // untuk menghentikan fungsi default sebuah event
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

// // const name = document.querySelector(".nama");
// // console.log(nama.nextElementSibling.nextElementSibling);

const container = document.querySelector(".container");
// Menelusuri ke container apabila menambahkan secara instan sebuah element maka fungsi ini akan tetap berfungsi
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
