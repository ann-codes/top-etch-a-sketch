let sides = 16;
let mode = "shader"; // black, eraser, color, rainbow, shader

const makeGrid = sides => {
  let sizeFr = `grid-template-columns: repeat(${sides}, 1fr)`;
  let squareSize = `${(400 / sides).toFixed(2)}px`;
  let squareCSS = `height:${squareSize};width:${squareSize}`;
  for (let i = 0; i < sides * sides; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    document.querySelector("#grid").appendChild(div);
    document.querySelector("#grid").style.cssText = sizeFr;
  }
  const square = document.querySelectorAll(".square");
  square.forEach(div => (div.style.cssText = squareCSS));
};

// destroy grid to remake
const killGrid = () => {
  const square = document.querySelectorAll(".square");
  square.forEach(div => div.parentNode.removeChild(div));
};

// erase exsiting grid
const clearGrid = () => {
  const square = document.querySelectorAll(".square");
  square.forEach(div => (div.style.backgroundColor = "#c4c4c4"));
  square.forEach(div => (div.style.opacity = 1.1));
};

// draw function depending on mode
const drawMode = color => {
  const sketchPad = document.querySelector("div#grid");
  sketchPad.addEventListener("mouseover", e => {
    if (mode === "black") {
      color = "black";
      e.target.style.backgroundColor = color;
      e.target.style.opacity = 1.1;
    } else if (mode === "eraser") {
      color = "#c4c4c4";
      e.target.style.backgroundColor = color;
      e.target.style.opacity = 1.1;
    } else if (mode === "color") {
      color = document.querySelector("#colorPicker").value;
      e.target.style.backgroundColor = color;
      e.target.style.opacity = 1.1;
    } else if (mode === "rainbow") {
      let r1 = Math.floor(Math.random() * Math.floor(255));
      let r2 = Math.floor(Math.random() * Math.floor(255));
      let r3 = Math.floor(Math.random() * Math.floor(255));
      let color = `rgb(${r1},${r2},${r3})`;
      e.target.style.backgroundColor = color;
      e.target.style.opacity = 1.1;
    } else if (mode === "shader") {
      e.target.style.backgroundColor = "black";
      let opacity = Number(e.target.style.opacity);
      if (e.target.style.opacity < 1) {
        opacity += 0.1;
        e.target.style.opacity = opacity.toFixed(1);
      } else if (e.target.style.opacity > 1) {
        e.target.style.opacity = 0.1;
      }
    }
  });
};

// clearing the drawing
document.querySelector("#clear").addEventListener("click", e => clearGrid());

// draw black
document.querySelector("#black").addEventListener("click", e => {
  mode = "black";
});

// eraser
document.querySelector("#eraser").addEventListener("click", e => {
  mode = "eraser";
});

// allowing to pick colors
document.querySelector("#colorPicker").addEventListener("change", e => {
  mode = "color";
});

// raindbow random colors
document.querySelector("#rainbow").addEventListener("click", e => {
  mode = "rainbow";
});

// draw shades of black
document.querySelector("#shade").addEventListener("click", e => {
  mode = "shader";
});

// change the number of sides
document.querySelector("#sides").addEventListener("click", e => {
  sides = document.querySelector("#sidesValue").value;
  if (sides >= 101 || sides <= 1) {
    alert("Please submit a number between 2 or 100!");
    document.querySelector("#sidesValue").value = 16;
  } else {
    killGrid();
    makeGrid(sides);
  }
});

const start = () => {
  makeGrid(sides);
  drawMode();
};

window.onload = start();
