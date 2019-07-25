let sides = 16;

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

makeGrid(sides);

// destroy grid to remake
const killGrid = () => {
  const square = document.querySelectorAll(".square");
  square.forEach(div => div.parentNode.removeChild(div));
};

// erase exsiting grid
const cleanGrid = () => {
  const square = document.querySelectorAll(".square");
  square.forEach(div => (div.style.backgroundColor = "#c4c4c4"));
};

const sketchPad = document.querySelector("div#grid");

// draw function
const draw = color => {
  sketchPad.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = color;
  });
};

draw("black");

// eraser function
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", e => draw("#c4c4c4"));

// allowing to pick colors
const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("change", e => {
  let pickedColor = document.querySelector("#colorPicker").value;
  draw(pickedColor);
});

// random colors
const drawRainbow = () => {
  sketchPad.addEventListener("mouseover", e => {
    let r1 = Math.floor(Math.random() * Math.floor(255));
    let r2 = Math.floor(Math.random() * Math.floor(255));
    let r3 = Math.floor(Math.random() * Math.floor(255));
    let color = `rgb(${r1},${r2},${r3})`;
    e.target.style.backgroundColor = color;
  });
};

const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", e => drawRainbow());

// clearing the drawing
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", e => cleanGrid());

// changing the number of sides
const sidesButton = document.querySelector("#sides");
sidesButton.addEventListener("click", e => {
  sides = document.querySelector("#sidesValue").value;
  if (sides >= 101 || sides <= 1) {
    alert("Please submit a number between 2 or 100!");
    document.querySelector("#sidesValue").value = 16;
  } else {
    killGrid();
    makeGrid(sides);
    cleanGrid();
  }
});
