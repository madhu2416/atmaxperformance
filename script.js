const track = document.getElementById("servicesTrack");
const cards = document.querySelectorAll("#servicesTrack .service-card");
let index = 0;
let autoSlide;

function slideNext() {
  index++;
  if (index >= cards.length) index = 0;
  updateSlider();
}

function slidePrev() {
  index--;
  if (index < 0) index = cards.length - 1;
  updateSlider();
}

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 16;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

function startAutoSlide() {
  autoSlide = setInterval(slideNext, 2000);
}
startAutoSlide();

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

document.querySelectorAll(".service-card").forEach(card => {
  card.onclick = () => {
    modalTitle.innerText = card.dataset.title;
    modalLine.innerText = card.dataset.line;
    modalDesc.innerText = card.dataset.desc;
    modal.style.display = "flex";
  };
});

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
