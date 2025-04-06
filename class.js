document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const section = card
        .getAttribute("data-section")
        .toLowerCase()
        .replace(/\s+/g, "-");
      window.location.href = `${section}.html`; // Navigate to e.g. classroom.html
    });
  });
});
