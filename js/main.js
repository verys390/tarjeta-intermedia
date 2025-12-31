// Animaciones suaves con IntersectionObserver (liviano y pro)
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".reveal");

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((el) => io.observe(el));
});
