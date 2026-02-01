const track = document.getElementById("autoCarouselTrack");
const cards = document.querySelectorAll(".auto-card");
const topCarousel = document.getElementById("topCarousel");
const allGrid = document.getElementById("allServicesGrid");
const showBtnWrap = document.getElementById("showBtnWrap");
const backBtnWrap = document.getElementById("backBtnWrap");

let index = 0;
let sliderInterval;

// Start slider
function startSlider() {
  sliderInterval = setInterval(() => {
    index++;
    if (index >= cards.length) index = 0;
    const width = cards[0].offsetWidth + 20;
    track.style.transform = `translateX(-${index * width}px)`;
  }, 3000);
}

startSlider();

// Show More
document.getElementById("showAllBtn").addEventListener("click", () => {
  topCarousel.style.display = "none";     // hide top 5
  showBtnWrap.style.display = "none";
  allGrid.style.display = "grid";         // show grid
  backBtnWrap.style.display = "block";    // show back arrow
  clearInterval(sliderInterval);          // stop sliding
});

// Back to Top
document.getElementById("backToTopBtn").addEventListener("click", () => {
  topCarousel.style.display = "block";    // show top 5
  showBtnWrap.style.display = "block";
  allGrid.style.display = "none";         // hide grid
  backBtnWrap.style.display = "none";     // hide back arrow
  startSlider();                          // resume sliding
});

// Modal
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".auto-card, .grid-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.innerText = card.dataset.title;
    modalDesc.innerText = card.dataset.desc;
  });
});

closeModal.onclick = () => modal.style.display = "none";
