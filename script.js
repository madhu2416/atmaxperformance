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
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
  galleryImgEl.src = galleryImages[galleryIndex];
}

// Start slider
setInterval(changeGalleryImage, 3000);

window.addEventListener("load", function() {
   setTimeout(function() {
      // popup
   }, 1500);
});


window.location.href = "https://wa.me/919361861764";


var message = "New Enquiry";
var encodedMessage = encodeURIComponent(message);
window.location.href = "https://wa.me/919361861764?text=" + encodedMessage;
