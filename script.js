const track = document.querySelector("#servicesTrack");
let cards = document.querySelectorAll(".auto-card");

let index = 0;
let cardWidth = 0;
let intervalId;

function setupSlider() {
  cards = document.querySelectorAll(".auto-card");
  if (!cards.length) return;

  cardWidth = cards[0].offsetWidth + 12;

  // Clone first 5 for smooth infinite loop
  const clones = [];
  cards.forEach(card => {
    clones.push(card.cloneNode(true));
  });

  // Remove old clones if any
  track.querySelectorAll(".clone").forEach(c => c.remove());

  clones.forEach(clone => {
    clone.classList.add("clone");
    track.appendChild(clone);
  });

  track.style.transition = "transform 2s linear";
}

function startAutoLoop() {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    index++;
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    if (index === cards.length) {
      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = "translateX(0px)";
        index = 0;

        setTimeout(() => {
          track.style.transition = "transform 2s linear";
        }, 50);
      }, 2000);
    }
  }, 2200);
}

window.addEventListener("load", () => {
  setupSlider();
  startAutoLoop();
});

window.addEventListener("resize", setupSlider);

/* SHOW MORE */
function showAllServices() {
  document.querySelector(".slider-section").style.display = "none";
  document.querySelector(".services-grid-wrapper").style.display = "block";
}

/* BACK */
function goBack() {
  document.querySelector(".services-grid-wrapper").style.display = "none";
  document.querySelector(".slider-section").style.display = "block";
}

/* MODAL */
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalLine = document.getElementById("modalLine");
const modalDesc = document.getElementById("modalDesc");

document.addEventListener("click", e => {
  const card = e.target.closest(".service-card");
  if (!card) return;

  modalTitle.innerText = card.dataset.title || "";
  modalLine.innerText = card.dataset.line || "";
  modalDesc.innerText = card.dataset.desc || "";
  modal.style.display = "flex";
});

modal.addEventListener("click", e => {
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
