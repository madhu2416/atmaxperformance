// Carousel
const carouselContainer = document.querySelector('.carousel-container');
const cards = document.querySelectorAll('.carousel-card');
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');

let currentIndex = 0;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 20; // include margin
  carouselContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

leftArrow.addEventListener('click', () => {
  if(currentIndex > 0){
    currentIndex--;
    updateCarousel();
  }
});

rightArrow.addEventListener('click', () => {
  if(currentIndex < cards.length - 1){
    currentIndex++;
    updateCarousel();
  }
});

// Show All Services
const showAllBtn = document.getElementById('showAllServices');
const allServicesGrid = document.querySelector('.all-services-grid');

showAllBtn.addEventListener('click', () => {
  allServicesGrid.style.display = 'grid';
  showAllBtn.style.display = 'none';
});
