document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Greeting
  const greetingElement = document.querySelector(".topbar h2");
  const now = new Date();
  const hour = now.getHours();

  let greetingText = "Hello";
  if (hour >= 5 && hour < 12) {
    greetingText = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greetingText = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greetingText = "Good Evening";
  } else {
    greetingText = "Good Night";
  }

  greetingElement.textContent = `${greetingText}, Student!`;

  // Card click navigation
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const section = card
        .getAttribute("data-section")
        .toLowerCase()
        .replace(/\s+/g, "-");
      window.location.href = `${section}.html`;
    });
  });
});
