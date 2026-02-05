const track = document.getElementById("servicesTrack");
const cards = document.querySelectorAll("#servicesTrack .auto-card");
let index = 0;

function updateSlider() {
  if (!cards.length) return;
  const cardWidth = cards[0].offsetWidth + 20; // card + margin
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextService() {
  index++;
  if (index >= cards.length) index = 0;   // infinite loop
  updateSlider();
}

function prevService() {
  index--;
  if (index < 0) index = cards.length - 1; // infinite loop
  updateSlider();
}

// Auto slide
setInterval(() => {
  nextService();
}, 2500);


// ================= MODAL FIX =================
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalTagline = document.getElementById("modalTagline");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

function openServiceModal(card) {
  modal.style.display = "flex";

  modalTitle.innerText = card.dataset.title;
  modalTagline.innerText = card.dataset.tagline;
  modalDesc.innerText = card.dataset.desc;

  // 🔥 Fix mobile scroll issue (works every time)
  requestAnimationFrame(() => {
    const scrollBox = document.querySelector(".desc-scroll");
    scrollBox.scrollTop = 0;
    scrollBox.style.overflowY = "auto";
    scrollBox.style.webkitOverflowScrolling = "touch";
  });
}

// Click on image OR name
document.querySelectorAll(".auto-card, .grid-card").forEach(card => {
  card.addEventListener("click", () => openServiceModal(card));
});

closeModal.onclick = () => {
  modal.style.display = "none";
  modalDesc.innerText = "";
};

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalDesc.innerText = "";
  }
});


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
