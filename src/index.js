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
