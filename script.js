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

    // ✅ FIX: render HTML so scroll works
    modalDesc.innerHTML = card.dataset.desc;
  });
});

closeModal.onclick = () => modal.style.display = "none";
