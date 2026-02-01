let carousel = document.getElementById('carousel');
let cards = document.querySelectorAll('.carousel-card');
let index = 0;

// Carousel navigation
function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.carousel-arrow.left').addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  updateCarousel();
});

document.querySelector('.carousel-arrow.right').addEventListener('click', () => {
  index = (index + 1) % cards.length;
  updateCarousel();
});

// Auto slide
let autoSlide = setInterval(() => {
  index = (index + 1) % cards.length;
  updateCarousel();
}, 3000);

// Show All Services
document.getElementById("showAllBtn").addEventListener("click", function(){
  document.getElementById("allServices").style.display = "grid";
  document.querySelector(".carousel-wrapper").style.display = "none";
  this.style.display = "none";
});

// Modal
const modal = document.getElementById("serviceModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.querySelector(".close");

document.querySelectorAll('.carousel-card, .service-card').forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = "flex";
    modalImage.src = card.querySelector('img').src;
    modalTitle.textContent = card.dataset.service;
    modalDescription.textContent = card.dataset.description;
  });
});

closeModal.addEventListener('click', () => modal.style.display="none");
window.addEventListener('click', e => { if(e.target==modal) modal.style.display="none"; });
