document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("calendar");
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const dateDiv = document.createElement("div");
    dateDiv.className = "day";
    dateDiv.textContent = `${day}`;

    dateDiv.addEventListener("click", () => {
      if (dateDiv.classList.contains("present")) {
        dateDiv.classList.remove("present");
        dateDiv.classList.add("absent");
      } else if (dateDiv.classList.contains("absent")) {
        dateDiv.classList.remove("absent");
      } else {
        dateDiv.classList.add("present");
      }
    });

    calendar.appendChild(dateDiv);
  }
});
