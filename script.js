const track = document.querySelector(".services-track");
const cards = document.querySelectorAll(".service-card");

let index = 0;
let cardWidth = 0;

function setupSlider() {
  cardWidth = cards[0].offsetWidth + 12; // gap included
}

function autoSlide() {
  index++;

  if (index >= 5) {
    track.style.transition = "none";
    index = 0;
    track.style.transform = `translateX(0px)`;

    setTimeout(() => {
      track.style.transition = "transform 2s linear";
      index = 1;
      track.style.transform = `translateX(-${cardWidth}px)`;
    }, 50);
  } else {
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
}

window.addEventListener("load", () => {
  setupSlider();
  setInterval(autoSlide, 1200);
});

window.addEventListener("resize", setupSlider);

/* SHOW MORE */
document.querySelector(".show-more-btn").onclick = () => {
  document.querySelector(".slider-section").style.display = "none";
  document.querySelector(".services-grid-wrapper").style.display = "block";
};

/* BACK */
document.querySelector(".back-btn").onclick = () => {
  document.querySelector(".services-grid-wrapper").style.display = "none";
  document.querySelector(".slider-section").style.display = "block";
};

/* MODAL (keep yours – this is safe) */
const modal = document.querySelector(".service-modal");
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
function moveSlider(dir) {
  const cardWidth = document.querySelector(".services-track .auto-card").offsetWidth + 12;
  index += dir;

  if (index < 0) index = cards.length - 1;
  if (index >= cards.length) index = 0;

  track.style.transform = `translateX(-${index * cardWidth}px)`;
}


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
