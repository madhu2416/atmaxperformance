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

  clearInterval(sliderInterval);

  sliderInterval = setInterval(() => {
    index++;

    if (index >= cards.length) {
      index = 0;
    }

    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(-${index * cardWidth}px)`;
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
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

function openServiceModal(card) {
  modal.style.display = "flex";
  modalTitle.innerText = card.dataset.title;
  modalDesc.innerHTML = card.dataset.desc;
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

function openServiceModal(card) {
  modal.style.display = "flex";
  document.body.classList.add("modal-open");

  modalTitle.innerText = card.dataset.title;

  // FORCE RE-CREATE SCROLL CONTAINER (fixes 2nd time scroll bug)
  modalDesc.innerHTML = `
    <div class="desc-scroll">
      ${card.dataset.desc}
    </div>
  `;

  // HARD RESET TOUCH SCROLL (mobile fix)
  setTimeout(() => {
    const scrollBox = modalDesc.querySelector(".desc-scroll");
    if (scrollBox) {
      scrollBox.scrollTop = 0;
      scrollBox.style.overflowY = "scroll";
      scrollBox.style.webkitOverflowScrolling = "touch";
      scrollBox.style.touchAction = "pan-y";
    }
  }, 80);
}

document.querySelectorAll(".auto-card, .grid-card").forEach(card => {
  card.addEventListener("click", () => openServiceModal(card));
});

closeModal.onclick = () => {
  modal.style.display = "none";
  modalDesc.innerHTML = "";
  document.body.classList.remove("modal-open");
};
