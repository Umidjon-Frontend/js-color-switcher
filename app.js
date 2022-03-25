const dataColor = [
  {
    id: 1,
    name: "#8e44ad",
  },
  {
    id: 2,
    name: "#f7ede2",
  },
  {
    id: 3,
    name: "#f5cac3",
  },
  {
    id: 4,
    name: "#84a59d",
  },
  {
    id: 5,
    name: "#f28482",
  },
  {
    id: 6,
    name: "#227c9d",
  },
  {
    id: 7,
    name: "#17c3b2",
  },
  {
    id: 8,
    name: "#003049",
  },
  {
    id: 9,
    name: "#ffd60a",
  },
];

const toggleSetting = document.querySelector(".setting-color");
const toggleIcon = document.querySelector(".setting-icon");
const btnWrapper = document.querySelector(".btn-wrapper");

toggleIcon.addEventListener("click", () => {
  toggleSetting.classList.toggle("active");
});

let data = dataColor
  .map((item, index) => {
    return `
    <button class="btn" style="background-color: ${item.name}"></button>
  `;
  })
  .join("");
btnWrapper.innerHTML = data;

const btnColor = document.querySelectorAll(".btn");

btnColor.forEach((element, index) => {
  element.addEventListener("click", () => {
    let color = dataColor[index].name;
    document.querySelector(":root").style.setProperty("--bg-color", color);
  });
});
