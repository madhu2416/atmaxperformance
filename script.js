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







window.onload = function() {
  setTimeout(function() {
    document.getElementById("enquiryPopup").style.display = "flex";
  }, 2000); // popup after 2 seconds
};

function closeEnquiry() {
  document.getElementById("enquiryPopup").style.display = "none";
}

function sendToWhatsApp() {
  var name = document.getElementById("name").value;
  var goal = document.getElementById("goal").value;
  var message = document.getElementById("message").value;

  var phone = "91XXXXXXXXXX"; // <-- PUT YOUR NUMBER

  var url = "https://wa.me/" + phone + "?text="
    + "Name: " + encodeURIComponent(name) + "%0A"
    + "Goal: " + encodeURIComponent(goal) + "%0A"
    + "Message: " + encodeURIComponent(message);

  window.open(url, "_blank");
}

