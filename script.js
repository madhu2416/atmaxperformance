const track = document.getElementById("autoCarouselTrack");
const allCards = document.querySelectorAll(".auto-card"); // all auto cards
const cards = Array.from(allCards).slice(0, 5); // ONLY FIRST 5 LOOP
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
    index = (index + 1) % cards.length;

    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }, 2500);
}

startSlider();

// ================= SHOW MORE / BACK =================

document.getElementById("showAllBtn").addEventListener("click", () => {
  topCarousel.style.display = "none";
  showBtnWrap.style.display = "none";
  allGrid.style.display = "grid";
  backBtnWrap.style.display = "block";
  clearInterval(sliderInterval);
});

document.getElementById("backToTopBtn").addEventListener("click", () => {
  topCarousel.style.display = "block";
  showBtnWrap.style.display = "block";
  allGrid.style.display = "none";
  backBtnWrap.style.display = "none";
  startSlider();
});

// ================= MODAL FIX =================

const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

function openServiceModal(card) {
  modal.style.display = "flex";
  document.body.classList.add("modal-open");

  modalTitle.innerText = card.dataset.title;

  // FORCE desc-scroll wrapper every time (this was your bug)
  modalDesc.innerHTML = `
    <div class="desc-scroll">
      ${card.dataset.desc}
    </div>
  `;

  // Hard reset scroll (Android/iOS fix)
  setTimeout(() => {
    const scrollBox = modalDesc.querySelector(".desc-scroll");
    if (scrollBox) {
      scrollBox.scrollTop = 0;
      scrollBox.style.overflowY = "scroll";
      scrollBox.style.webkitOverflowScrolling = "touch";
      scrollBox.style.touchAction = "pan-y";
    }
  }, 60);
}

document.querySelectorAll(".auto-card, .grid-card").forEach(card => {
  card.addEventListener("click", () => openServiceModal(card));
});

closeModal.onclick = () => {
  modal.style.display = "none";
  modalDesc.innerHTML = "";
  document.body.classList.remove("modal-open");
};

function openServiceModal(card) {
  modal.style.display = "flex";
  document.body.classList.add("modal-open");

  modalTitle.innerText = card.dataset.title;
  modalDesc.innerHTML = card.dataset.desc;

  requestAnimationFrame(() => {
    const scrollBox = modalDesc.querySelector(".desc-scroll");
    if (scrollBox) {
      scrollBox.scrollTop = 0;

      // Force mobile to rebind touch scroll every time
      scrollBox.style.webkitOverflowScrolling = "auto";
      scrollBox.offsetHeight;
      scrollBox.style.webkitOverflowScrolling = "touch";
    }
  });
}

closeModal.onclick = () => {
  modal.style.display = "none";
  modalDesc.innerHTML = "";
  document.body.classList.remove("modal-open");
};

// ===== Gallery Auto Slider =====
// ===== Gallery Auto Slider (Smooth fade for every image) =====
const galleryImages = [
  "assets/gallery1.jpeg",
  "assets/gallery2.jpg.jpeg",
  "assets/gallery3.jpg.jpeg",
  "assets/gallery4.jpg.jpeg",
  "assets/gallery5.jpg.jpeg",
  "assets/gallery6.jpg.jpeg",
  "assets/gallery7.jpg.jpeg",
  "assets/gallery9.jpg.jpeg",
  "assets/gallery10.jpg.jpeg",
  "assets/gallery11.jpg.jpeg",
  "assets/gallery12.jpg.jpeg",
  "assets/gallery13.jpg.jpeg",
  "assets/gallery14.jpg.png",
  "assets/gallery15.jpg.png",
  "assets/gallery16.jpg.png",
  "assets/gallery17.jpg.png"
];

const galleryImgEl = document.getElementById("galleryImage");
let galleryIndex = 0;

// Preload images so fade works every time
galleryImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

function changeGalleryImage() {
  galleryImgEl.classList.remove("fade-in");
  galleryImgEl.style.opacity = 0;

  setTimeout(() => {
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    galleryImgEl.src = galleryImages[galleryIndex];

    // Wait until image is loaded before fading in
    galleryImgEl.onload = () => {
      galleryImgEl.style.opacity = 1;
    };
  }, 600);
}

setInterval(changeGalleryImage, 2000);
