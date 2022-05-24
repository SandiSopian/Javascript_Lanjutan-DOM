// Event Handling
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Traversal
// Method = Hasil
// parentNode = node
// parentElement = element
// nextSibling = node
// nextElementSibling = element
// previousSibling = node
// previousElementSibling = element

const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// }

close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  });
});

// const name = document.querySelector(".nama");
// console.log(nama.nextElementSibling.nextElementSibling);
