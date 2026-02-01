document.addEventListener("DOMContentLoaded", () => {
  // ---------- MODAL ELEMENTS ----------
  const modal = document.getElementById("serviceModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".close");

  // ---------- SERVICES TRACK ----------
  const track = document.querySelector(".services-track");

  if (track) {
    // Clone all service cards for infinite scrolling
    const services = Array.from(track.children);
    services.forEach(service => {
      track.appendChild(service.cloneNode(true));
    });

    // Calculate total width for marquee animation
    const totalWidth = services.reduce((sum, el) => sum + el.offsetWidth + 20, 0); // 20 = gap
    track.style.setProperty("--marquee-distance", `-${totalWidth}px`);

    // ---------- MODAL CLICK EVENT ----------
    // Use event delegation for all services (original + cloned)
    track.addEventListener("click", e => {
      const service = e.target.closest(".service"); // get the clicked service
      if (!service) return;

      modalTitle.textContent = service.dataset.service;
      modalImage.src = service.dataset.img;
      modalDescription.textContent = service.dataset.description;
      modal.style.display = "flex";
    });
  }

  // ---------- CLOSE MODAL ----------
  closeBtn.onclick = () => modal.style.display = "none";
  modal.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
  };

  // ---------- REVEAL ANIMATION ----------
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(r => observer.observe(r));

  // ---------- GALLERY SLIDER ----------
  const galleryImage = document.getElementById("galleryImage");
  if (galleryImage) {
    const images = [
      "assets/gallery1.jpg", "assets/gallery2.jpg", "assets/gallery3.jpg",
      "assets/gallery4.jpg", "assets/gallery5.jpg", "assets/gallery6.jpg",
      "assets/gallery7.jpg", "assets/gallery8.jpg", "assets/gallery9.jpg",
      "assets/gallery10.jpg", "assets/gallery11.jpg", "assets/gallery12.jpg",
      "assets/gallery13.jpg"
    ];

    let index = 0;
    setInterval(() => {
      galleryImage.style.opacity = 0;
      setTimeout(() => {
        index = (index + 1) % images.length;
        galleryImage.src = images[index];
        galleryImage.style.opacity = 1;
      }, 500);
    }, 3000);
  }
});

const viewBtn = document.querySelector('.view-all-services');
const extraServices = document.querySelector('.services-extra');

viewBtn.addEventListener('click', () => {
  extraServices.style.display = 'flex';
  extraServices.style.flexWrap = 'wrap';
  extraServices.style.justifyContent = 'center';
  viewBtn.style.display = 'none';
});
