// ======= Top 5 Carousel =======
const carousel = document.querySelector('.top-services-carousel');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

let scrollAmount = 0;
const cardWidth = carousel.querySelector('.service-card').offsetWidth + 20; // includes gap

leftArrow.addEventListener('click', () => {
  carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

// ======== Show All Services Button ========
const showAllBtn = document.querySelector('.view-all-services');
const extraServicesContainer = document.querySelector('.services-extra');

showAllBtn.addEventListener('click', () => {
  extraServicesContainer.style.display = 'flex';
  showAllBtn.style.display = 'none';
});

// ======= MODAL CODE STAYS SAME =======
// Your existing modal JS for clicking .service-card and opening modal remains unchanged


// ======== OPEN MODAL FUNCTION ========
function openModal(card) {
  modal.style.display = 'flex';
  modalTitle.innerText = card.dataset.service;
  modalDescription.innerText = card.dataset.description;
  modalImage.src = card.dataset.img;
}

// ======== CLICK EVENTS FOR TOP 5 SERVICES ========
topServiceCards.forEach(card => {
  card.addEventListener('click', () => openModal(card));
});

// ======== CLICK EVENTS FOR EXTRA SERVICES ========
extraServiceCards.forEach(card => {
  card.addEventListener('click', () => openModal(card));
});

// ======== CLOSE MODAL EVENTS ========
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

// ======== SHOW ALL SERVICES BUTTON FUNCTIONALITY ========
showAllBtn.addEventListener('click', () => {
  const extraServicesContainer = document.querySelector('.services-extra');
  extraServicesContainer.style.display = 'flex';
  extraServicesContainer.style.flexWrap = 'wrap';
  extraServicesContainer.style.justifyContent = 'center';
  showAllBtn.style.display = 'none'; // hide the button after click
});

