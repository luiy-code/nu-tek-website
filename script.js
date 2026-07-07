// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

// "Book a Consultation" buttons carry the service name to the contact form
document.querySelectorAll("[data-service]").forEach((btn) => {
  btn.addEventListener("click", () => {
    sessionStorage.setItem("nutek-service", btn.dataset.service);
  });
});

// Pre-select the service in the contact form if one was chosen
const serviceSelect = document.querySelector('select[name="service"]');
const savedService = sessionStorage.getItem("nutek-service");
if (serviceSelect && savedService) {
  [...serviceSelect.options].forEach((opt) => {
    if (opt.text === savedService) opt.selected = true;
  });
  sessionStorage.removeItem("nutek-service");
}

// Show confirmation after FormSubmit redirects back with ?sent=1
if (window.location.search.includes("sent=1")) {
  const note = document.getElementById("form-note");
  if (note) {
    note.textContent =
      "Thanks! Your request was sent. We'll get back to you within one business day — for faster help, call +1 (954) 326-1736.";
    document.querySelector(".contact-form").scrollIntoView({ block: "center" });
  }
}
