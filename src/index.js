let sides = 16;

const makeGrid = function(sides) {
  for (let i = 0; i < sides * sides; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    document.querySelector("#grid").appendChild(div);

    let sizeFr = `grid-template-columns: repeat(${sides}, 1fr)`;
    document.querySelector("#grid").style.cssText = sizeFr;
    let squareVal = (400 / sides).toFixed(2);
    let squareSize = `${squareVal}px`;
    let squareCSS = `height:${squareSize};width:${squareSize}`;
    const square = document.querySelectorAll(".square");
    square.forEach(div => (div.style.cssText = squareCSS));
    // this is too laggy the higher the values!!
  }
};

makeGrid(sides);

// destroy grid to remake
const killGrid = function() {
  const square = document.querySelectorAll(".square");
  square.forEach(div => div.parentNode.removeChild(div));
};

// erase exsiting grid
const cleanGrid = function() {
  const square = document.querySelectorAll(".square");
  square.forEach(div => (div.style.backgroundColor = "gray"));
};

const sketchPad = document.querySelector("div#grid");

// draw function
const draw = function(color) {
  sketchPad.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = color;
  });
};

draw("black");

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", e => cleanGrid());

const sidesButton = document.querySelector("#sides");
sidesButton.addEventListener("click", e => {
  sides = document.querySelector("#sidesValue").value;
  if (sides >= 65 || sides <= 1) {
    alert("Please submit a number between 2 or 64!");
    document.querySelector("#sidesValue").value = 16;
  } else {
    document.querySelector("#test").textContent = sides;
    killGrid();
    makeGrid(sides);
    cleanGrid();
  }
});
