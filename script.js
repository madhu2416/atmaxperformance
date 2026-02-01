// Carousel Auto Slide + Infinite Loop
const track = document.getElementById("carouselTrack");
const carouselCards = document.querySelectorAll(".carousel-card");
let carouselIndex = 0;

function moveCarousel() {
  carouselIndex++;
  if(carouselIndex >= carouselCards.length) carouselIndex = 0;
  const width = carouselCards[0].offsetWidth + 15; // card width + gap
  track.style.transform = `translateX(-${carouselIndex * width}px)`;
}

// Auto Slide every 3s
let carouselInterval = setInterval(moveCarousel, 3000);

// Show More Button
const showBtn = document.getElementById("showAllBtn");
const hiddenGrid = document.getElementById("hiddenServicesGrid");
const backBtnWrapper = document.getElementById("backBtnWrapper");

showBtn.addEventListener("click", () => {
  hiddenGrid.style.display = "grid";
  showBtn.style.display = "none";
  // Hide top 5 carousel
  document.querySelector(".carousel-wrapper").style.display = "none";
  // Show back button
  backBtnWrapper.style.display = "block";
  clearInterval(carouselInterval); // stop auto-slide
});

// Back Button
document.getElementById("backToCarouselBtn").addEventListener("click", () => {
  hiddenGrid.style.display = "none";
  backBtnWrapper.style.display = "none";
  document.querySelector(".carousel-wrapper").style.display = "block";
  showBtn.style.display = "inline-block";
  carouselInterval = setInterval(moveCarousel, 3000); // restart carousel
});

// Modal
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".carousel-card, .grid-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.innerText = card.dataset.title;
    modalDesc.innerText = card.dataset.desc;
  });
});

closeModal.onclick = () => modal.style.display = "none";
