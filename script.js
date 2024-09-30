document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Para de observar uma vez que é visível
      }
    });
  }, { threshold: 0.1 }); // 10% do elemento deve estar visível para ativar a animação

  sections.forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Iniciar o efeito de escrita para o título
  const title = document.querySelector('.titulo-sobre');
  setTimeout(() => {
    title.style.animation = 'typing 4s steps(30, end), blink-caret 0.75s step-end infinite';
  }, 500); // Inicia a animação de escrita após 500ms
});

/* CARROSEL */ 

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

let index = 0;
const itemsToShow = 3; // Número de quadrados a serem exibidos

function updateCarousel() {
    const offset = -index * 310; // Largura de cada quadrado
    track.style.transform = `translateX(${offset}px)`;
}

function moveToNextSlide() {
    index = (index + 1) % (items.length - itemsToShow + 1);
    updateCarousel();
}

function moveToPreviousSlide() {
    index = (index - 1 + (items.length - itemsToShow + 1)) % (items.length - itemsToShow + 1);
    updateCarousel();
}

// Eventos de clique nos botões
rightButton.addEventListener('click', moveToNextSlide);
leftButton.addEventListener('click', moveToPreviousSlide);
