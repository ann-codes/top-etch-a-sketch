let gridRow = 16;
let gridCol = 16;

const makeGrid = function(gridRow, gridCol) {
  for (let i = 0; i < gridRow * gridCol; i++) {
    const loc = document.querySelector("#grid");
    const div = document.createElement("div");
    loc.appendChild(div);
  }
};

makeGrid(gridRow, gridCol);

const sketchPad = document.querySelector("div#grid");
const clearButton = document.querySelector("#clear");

sketchPad.addEventListener("mouseover", e => {
  e.target.style.backgroundColor = "red";
});

clearButton.addEventListener("click", e => {
  document.querySelectorAll(".red").forEach(el => el.classList.add("clear"));
});

//https://www.w3schools.com/cssref/tryit.asp?filename=trycss_js_grid-template-rows
