const track = document.querySelector(".services-track");
let cards = document.querySelectorAll(".auto-card"); // first 5 only
let currentIndex = 0;

// Duplicate first 5 cards for seamless loop
cards.forEach(card => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});

// Re-select after cloning
cards = document.querySelectorAll(".auto-card");

const cardGap = 16;

function autoSlide() {
  const cardWidth = cards[0].offsetWidth + cardGap;
  currentIndex++;

  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  // Seamless reset (no blink)
  if (currentIndex === 5) {
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = `translateX(0px)`;
      currentIndex = 0;
    }, 500);
  }
}

// Auto slide every 2s
setInterval(autoSlide, 2000);

/* SHOW MORE */
function showAllServices() {
  document.getElementById("servicesSlider").style.display = "none";
  document.querySelector(".show-more-btn").style.display = "none";
  document.getElementById("allServices").style.display = "block";
}

/* BACK */
function goBack() {
  document.getElementById("allServices").style.display = "none";
  document.getElementById("servicesSlider").style.display = "flex";
  document.querySelector(".show-more-btn").style.display = "block";
}

/* MODAL */
const modal = document.getElementById("serviceModal");
const modalTitle = modal.querySelector("h4");
const modalLine = modal.querySelector("h3");
const modalDesc = modal.querySelector("h2");

// Attach click to ALL service cards (slider + grid)
document.querySelectorAll(".auto-card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.innerText = card.dataset.title;
    modalLine.innerText = card.dataset.tagline;
    modalDesc.innerText = card.dataset.desc;
    modal.style.display = "flex";
    modalDesc.scrollTop = 0;
  });
});

// Close modal on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
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
