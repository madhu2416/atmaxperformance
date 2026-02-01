const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const serviceCards = document.querySelectorAll('.carousel .service-card');

let currentIndex = 0;

// Auto-slide every 4s
setInterval(() => {
  currentIndex = (currentIndex + 1) % serviceCards.length;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 4000);

// Arrow clicks
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + serviceCards.length) % serviceCards.length;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % serviceCards.length;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

// Show All Services
const showAllBtn = document.querySelector('.view-all-services');
const extraServices = document.querySelector('.services-extra');

showAllBtn.addEventListener('click', () => {
  extraServices.style.display = 'flex';
  showAllBtn.style.display = 'none';
});

// Modal functionality stays the same for .service-card clicks


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

