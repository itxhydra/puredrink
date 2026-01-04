document.addEventListener("DOMContentLoaded", () => {

  if (typeof freeCafes === "undefined") {
    console.error("freeCafes list not found");
    return;
  }

  const freeGrid = document.getElementById("freeCafesGrid");
  if (!freeGrid) return;

  freeCafes.forEach(cafe => {
    const card = document.createElement("a");
    card.className = "cafe-card free";
    card.href = `free/cafe.html?code=${cafe.code}`;

    card.innerHTML = `
      <img src="${cafe.logo}" alt="${cafe.name}">
      <h3>${cafe.name}</h3>
      <span class="code">Code: ${cafe.code}</span>
      <button>Order Now</button>
    `;

    freeGrid.appendChild(card);
  });

});
