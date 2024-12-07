// Muda a classe e mostra/esconde o texto dos acordeões. Gerado por CHATGPT
document.addEventListener("DOMContentLoaded", function () {
  // Encontrar todas as setas e adicionar o ouvinte de evento de clique
  document.querySelectorAll(".fa-chevron-down").forEach(function (arrow) {
    arrow.addEventListener("click", openCloseArticle);
  });
});

function openCloseArticle(event) {
  // Encontrar o elemento que disparou o evento (a seta)
  let arrow = event.target;

  // Obter o elemento pai da seta clicada
  let parent = arrow.closest("article"); // Agora pegamos o artigo como pai

  // Encontrar todos os filhos do elemento pai com as classes "hidden" ou "showing"
  let filhos = parent.querySelectorAll(".hidden, .showing");
  let setinhas = parent.querySelector(".fa-chevron-down");

  // Alternar as classes de todos os filhos encontrados
  filhos.forEach(function (filho) {
    if (filho.classList.contains("hidden")) {
      filho.classList.remove("hidden");
      filho.classList.add("showing");
      setinhas.classList.add("open");
    } else {
      filho.classList.remove("showing");
      filho.classList.add("hidden");
      setinhas.classList.remove("open");
    }
  });
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
