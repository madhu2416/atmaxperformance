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
const showBtn = document.getElementById("showAllBtn");
const hiddenGrid = document.getElementById("hiddenServicesGrid");
const top5Wrapper = document.getElementById("top5CarouselWrapper");
const backBtn = document.getElementById("backToCarousel");

hiddenGrid.style.display = "none"; // enforce hidden at start
backBtn.style.display = "none"; // back button hidden initially

showBtn.addEventListener("click", () => {
  hiddenGrid.style.display = "grid"; // show hidden services
  top5Wrapper.style.display = "none"; // hide top 5 carousel
  showBtn.style.display = "none"; // hide show more button
  backBtn.style.display = "inline-block"; // show back button
  clearInterval(carouselInterval); // stop carousel
});

backBtn.addEventListener("click", () => {
  hiddenGrid.style.display = "none"; // hide hidden services
  top5Wrapper.style.display = "block"; // show top 5 carousel
  showBtn.style.display = "inline-block"; // show show more button
  backBtn.style.display = "none"; // hide back button
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
