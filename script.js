/* MODAL FIX – works for BOTH slider (5) + grid (16) */
const modal = document.getElementById("serviceModal");
const modalTitle = modal.querySelector("h4");
const modalLine = modal.querySelector("h3");
const modalDesc = modal.querySelector("h2");

function bindServiceClicks() {
  document.querySelectorAll(".auto-card").forEach(card => {
    card.onclick = () => {
      modalTitle.innerText = card.dataset.title;
      modalLine.innerText = card.dataset.tagline;
      modalDesc.innerText = card.dataset.desc;
      modal.style.display = "flex";
    };
  });
}

/* Bind on load */
bindServiceClicks();

/* Close modal */
modal.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};



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
