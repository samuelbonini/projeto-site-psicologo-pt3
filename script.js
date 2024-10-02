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

/* FIM */

/* CARROSEL INICIO */ 
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // Pagina bullet
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
      0: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      },
      
  }
});