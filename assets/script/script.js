// Muda a classe e mostra/esconde o texto de Events
function changeEvents() {
  if (document.getElementById("events-box").className == "hidden") {
    document.getElementById("events-box").className = "showing";
  } else {
    document.getElementById("events-box").className = "hidden";
  }
}

// Muda a classe e mostra/esconde o texto de Research
function changeResearch() {
  if (document.getElementById("research-box").className == "hidden") {
    document.getElementById("research-box").className = "showing";
  } else {
    document.getElementById("research-box").className = "hidden";
  }
}

// Muda a classe e mostra/esconde o texto de Exploratory
function changeExploratory() {
  if (document.getElementById("exploratory-box").className == "hidden") {
    document.getElementById("exploratory-box").className = "showing";
  } else {
    document.getElementById("exploratory-box").className = "hidden";
  }
}

// Muda a classe e mostra/esconde o texto de Development
function changeDevelopment() {
  if (document.getElementById("development-box").className == "hidden") {
    document.getElementById("development-box").className = "showing";
  } else {
    document.getElementById("development-box").className = "hidden";
  }
}

// Muda a classe e mostra/esconde o texto de Dissemination
function changeDissemination() {
  if (document.getElementById("dissemination-box").className == "hidden") {
    document.getElementById("dissemination-box").className = "showing";
  } else {
    document.getElementById("dissemination-box").className = "hidden";
  }
}

// CHATGPT
let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".mySlides");

  // console.log(slides);
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Vai para o último slide
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // Vai para o primeiro slide
  }

  const container = document.querySelector(".carousel-container");
  container.scrollTo({
    left: slides[currentIndex].offsetLeft, // Desloca para o slide atual
    behavior: "smooth",
  });
}

// // CAROUSEL
// document.addEventListener("DOMContentLoaded", function () {
//   let slides = document.getElementsByClassName("mySlides");

//   // Esconde todos os slides primeiro
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   // Mostra o primeiro slide
//   if (slides.length > 0) {
//     slides[0].style.display = "block";
//   }
// });

// let slideIndex = 1;

// function changeSlide(n) {
//   let slides = document.getElementsByClassName("mySlides");

//   slideIndex += n;

//   // Ajusta o índice se passar dos limites
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   if (slideIndex < 1) {
//     slideIndex = slides.length;
//   }

//   // Esconde todos os slides
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   // Mostra o slide atual
//   slides[slideIndex - 1].style.display = "block";
// }
