// your JS code here

const picture = [
  {
    src: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=1350&q=80",
    text: "Explore the world"
  },
  {
    src: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?auto=format&fit=crop&w=1350&q=80",
    text: "Wild Forest"
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1353&q=80",
    text: "City on Winter"
  },
  {
    src: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&w=1351&q=80",
    text: "Mountain Cloud"
  },
  {
    src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1350&q=80",
    text: "Sunny Beach"
  }
];

const container = document.querySelector(".container");

// Create panels dynamically
picture.forEach((item, index) => {
  const panel = document.createElement("div");

  panel.classList.add("panel");
  panel.id = `panel-${index + 1}`;
  panel.style.backgroundImage = `url(${item.src})`;

  panel.innerHTML = `
        <p class="img-text">${item.text}</p>
    `;

  container.appendChild(panel);
});

// Select all panels
const allPanels = document.querySelectorAll(".panel");

// Make the first panel active
allPanels[0].classList.add("active");

// Add click event for each panel
allPanels.forEach(panel => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  allPanels.forEach(panel => panel.classList.remove("active"));
}
