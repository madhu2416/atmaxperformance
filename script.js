const track = document.querySelector(".services-track");
let cards = document.querySelectorAll(".auto-card");
let index = 0;

// ---------- CONTINUOUS INFINITE AUTO LOOP ----------
let speed = 0.6; // higher = faster
let pos = 0;

function autoLoop() {
  pos -= speed;
  track.style.transform = `translateX(${pos}px)`;

  const firstCard = track.children[0];
  const cardWidth = firstCard.offsetWidth + 16;

  if (Math.abs(pos) >= cardWidth) {
    track.appendChild(firstCard);
    pos += cardWidth;
  }

  requestAnimationFrame(autoLoop);
}
requestAnimationFrame(autoLoop);

// ---------- SHOW MORE / BACK ----------
function showAllServices() {
  document.getElementById("servicesSlider").style.display = "none";
  document.querySelector(".show-more-btn").style.display = "none";
  document.getElementById("allServices").classList.remove("hidden");
}

function goBack() {
  document.getElementById("servicesSlider").style.display = "flex";
  document.querySelector(".show-more-btn").style.display = "block";
  document.getElementById("allServices").classList.add("hidden");
}

// ---------- MODAL ----------
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalTagline = document.getElementById("modalTagline");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

// click works for BOTH slider + grid
document.querySelectorAll(".auto-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.innerText = card.dataset.title;
    modalTagline.innerText = card.dataset.tagline;
    modalDesc.innerText = card.dataset.desc;

    document.querySelector(".desc-scroll").scrollTop = 0;
  });
});

closeModal.onclick = () => modal.style.display = "none";

modal.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
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
