const carousel = document.getElementById("carousel");
const cards = carousel.querySelectorAll(".service-card");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
let index = 0;

function showSlide(i){
  if(i < 0) index = cards.length - 1;
  else if(i >= cards.length) index = 0;
  else index = i;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

leftArrow.addEventListener("click", () => showSlide(index - 1));
rightArrow.addEventListener("click", () => showSlide(index + 1));

// Auto-slide (optional)
setInterval(() => showSlide(index + 1), 4000);

// Show All Services
document.getElementById("showAllBtn").addEventListener("click", function(){
  document.getElementById("allServices").style.display = "grid";
  document.querySelector(".carousel-wrapper").style.display = "none";
  this.style.display = "none";
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

