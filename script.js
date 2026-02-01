const track = document.getElementById("autoCarouselTrack");
const cards = document.querySelectorAll(".auto-card");
const topCarousel = document.getElementById("topCarousel");
const allGrid = document.getElementById("allServicesGrid");
const showBtnWrap = document.getElementById("showBtnWrap");
const backBtnWrap = document.getElementById("backBtnWrap");

let index = 0;
let sliderInterval;

function startSlider() {
  const cardWidth = cards[0].offsetWidth + 20;

  sliderInterval = setInterval(() => {
    index++;
    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    // Reset seamlessly when reaching clones
    if (index === 5) {
      setTimeout(() => {
        track.style.transition = "none";
        index = 0;
        track.style.transform = `translateX(0px)`;
      }, 600);
    }
  }, 2500);
}

startSlider();

// Show More
document.getElementById("showAllBtn").addEventListener("click", () => {
  topCarousel.style.display = "none";
  showBtnWrap.style.display = "none";
  allGrid.style.display = "grid";
  backBtnWrap.style.display = "block";
  clearInterval(sliderInterval);
});

// Back
document.getElementById("backToTopBtn").addEventListener("click", () => {
  topCarousel.style.display = "block";
  showBtnWrap.style.display = "block";
  allGrid.style.display = "none";
  backBtnWrap.style.display = "none";
  startSlider();
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

const track = document.getElementById("autoCarouselTrack");
const cards = document.querySelectorAll(".auto-card");

let index = 0;
let isDragging = false;
let startX;
let scrollLeft;

// Infinite auto-scroll
function autoScroll() {
  index++;
  if (index >= cards.length) index = 0;
  const cardWidth = cards[0].offsetWidth + 10; // width + gap
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

let autoInterval = setInterval(autoScroll, 3000);

/* ---------- Manual Drag/Swipe ---------- */
track.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.offsetLeft;
  clearInterval(autoInterval); // pause auto-scroll while dragging
});

track.addEventListener('mouseleave', () => isDragging = false);
track.addEventListener('mouseup', () => {
  isDragging = false;
  autoInterval = setInterval(autoScroll, 3000); // resume auto-scroll
});

track.addEventListener('mousemove', (e) => {
  if(!isDragging) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX); 
  track.style.transform = `translateX(${scrollLeft + walk}px)`;
});

/* Touch support for mobile swipe */
track.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - track.offsetLeft;
  scrollLeft = track.offsetLeft;
  clearInterval(autoInterval);
});

track.addEventListener('touchend', () => {
  isDragging = false;
  autoInterval = setInterval(autoScroll, 3000);
});

track.addEventListener('touchmove', (e) => {
  if(!isDragging) return;
  const x = e.touches[0].pageX - track.offsetLeft;
  const walk = (x - startX); 
  track.style.transform = `translateX(${scrollLeft + walk}px)`;
});
