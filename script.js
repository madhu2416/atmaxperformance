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

// ===== Gallery Auto Slider (No Blink, No Duplicate) =====
const galleryImages = [
  "assets/gallery1.jpeg",
  "assets/gallery2.jpeg",
  "assets/gallery3.jpeg",
  "assets/gallery4.jpeg",
  "assets/gallery5.jpeg",
  "assets/gallery6.jpeg",
  "assets/gallery7.jpeg",
  "assets/gallery9.jpeg",
  "assets/gallery10.jpeg",
  "assets/gallery11.jpeg",
  "assets/gallery12.jpeg",
  "assets/gallery13.jpeg",
  "assets/gallery14.png",
  "assets/gallery15.png",
  "assets/gallery16.png",
  "assets/gallery17.png"
];

const galleryImgEl = document.getElementById("galleryImage");
let galleryIndex = 0;

// Preload images
galleryImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

function changeGalleryImage() {
  galleryImgEl.style.opacity = 0;

  setTimeout(() => {
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    galleryImgEl.src = galleryImages[galleryIndex];
    galleryImgEl.style.opacity = 1;
  }, 600);
}

// Start after 2 seconds (so first image doesn’t repeat)
setTimeout(() => {
  setInterval(changeGalleryImage, 2000);
}, 2000);
