// ====================== SERVICES INTERACTION ======================

// Top 5 service cards
const topServiceCards = document.querySelectorAll('.top-services .service-card');

// Extra services (hidden initially)
const extraServiceCards = document.querySelectorAll('.services-extra .service-card');

// "Show All Services" button
const showAllBtn = document.querySelector('.view-all-services');

// Modal elements (assuming your existing modal code uses these IDs)
const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

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

