const track = document.getElementById("autoCarouselTrack");
const cards = document.querySelectorAll(".auto-card");
let index = 0;

// Auto Slide
setInterval(() => {
  index++;
  if (index >= cards.length) index = 0;
  const width = cards[0].offsetWidth + 20;
  track.style.transform = `translateX(-${index * width}px)`;
}, 3000);

// Show More Services
document.getElementById("showAllBtn").addEventListener("click", () => {
  document.getElementById("allServicesGrid").style.display = "grid";
  document.getElementById("showAllBtn").style.display = "none";
});

// Modal
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".auto-card, .grid-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.innerText = card.dataset.title;
    modalDesc.innerText = card.dataset.desc;
  });
});

closeModal.onclick = () => modal.style.display = "none";
