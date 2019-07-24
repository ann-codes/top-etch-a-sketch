let sides = 16;

const makeGrid = function(sides) {
  for (let i = 0; i < sides * sides; i++) {
    const loc = document.querySelector("#grid");
    const div = document.createElement("div");
    div.classList.add("square");
    loc.appendChild(div);
  }
};

makeGrid(sides);

const sketchPad = document.querySelector("div#grid");
const clearButton = document.querySelector("#clear");

sketchPad.addEventListener("mouseover", e => {
  e.target.style.backgroundColor = "red";
});

clearButton.addEventListener("click", e => {
  const square = document.querySelectorAll(".square");
  square.forEach(div => (div.style.backgroundColor = "gray"));
});
