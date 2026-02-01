// --- Carousel Infinite Slide ---
const carouselTrack = document.getElementById("top5CarouselTrack");
const carouselCards = document.querySelectorAll(".carousel-card");
let carouselIndex = 0;

function slideCarousel() {
  carouselIndex++;
  if (carouselIndex >= carouselCards.length) carouselIndex = 0;
  const width = carouselCards[0].offsetWidth + 20;
  carouselTrack.style.transform = `translateX(-${carouselIndex * width}px)`;
}

let carouselInterval = setInterval(slideCarousel, 3000);

// --- Show More Button ---
const showBtn = document.getElementById("showAllBtn");
const hiddenGrid = document.getElementById("hiddenServicesGrid");
const top5Wrapper = document.getElementById("top5CarouselWrapper");
const backBtn = document.getElementById("backToCarousel");

showBtn.addEventListener("click", () => {
  hiddenGrid.style.display = "grid";
  top5Wrapper.style.display = "none";
  showBtn.style.display = "none";
  backBtn.style.display = "inline-block";
  clearInterval(carouselInterval); // stop carousel
});

// --- Back Button ---
backBtn.addEventListener("click", () => {
  hiddenGrid.style.display = "none";
  top5Wrapper.style.display = "block";
  showBtn.style.display = "inline-block";
  backBtn.style.display = "none";
  carouselIndex = 0;
  carouselTrack.style.transform = `translateX(0px)`;
  carouselInterval = setInterval(slideCarousel, 3000); // restart carousel
});

// --- Modal ---
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
