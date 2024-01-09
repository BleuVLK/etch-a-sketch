function genGrid(rows = 16, columns = 16) {
  /* On loading webpage generates a 16x16 grid by means of two loops
  1st loop generates a row & 2nd 16 columns into that row.
  Each column is appended an event listener with a function to
  change their colour on hover */
  const GRID = document.querySelector('.grid');
  for (let i = 0; i < rows; i++) {
    const ROW = document.createElement('div');
    ROW.classList.toggle('row');
    for (let c = 0; c < columns; c++) {
      const COLUMN = document.createElement('div');
      COLUMN.classList.toggle('column');
      COLUMN.style.opacity = '0.5';
      COLUMN.addEventListener('mouseover', () => {
          changeColour(COLUMN);
        });
      ROW.append(COLUMN);
    }
    GRID.append(ROW);
  }
}


genGrid(); /* triggers function on load */


/* colour handling section. see changeColour() for explanation */

let trail = false;
let rainbow = false;


const BODY = document.querySelector('.grid-container');
BODY.addEventListener('mousedown', () => {
  trail = true;
})
BODY.addEventListener('mouseup', () => {
  trail = false;
})


const RAINBOW = document.querySelector('#rainbow');
RAINBOW.addEventListener('change', e => {
  e.target.checked ? rainbow = true : rainbow = false;
})


function random() {
  return Math.floor(Math.random() * 255);
}


function changeColour(element) {
  /* draws only if trail is set to true (holding down on the mouse)
  colour assigned on hover will depend on the condition being
  fulfilled. If checkbox is checked, the rainbow var is changes
  to true. Then, the random function is called three times and 
  the values are passed to an rbg based background. If turned
  off, the colour will default to black */
  if (trail === true) {
    switch(true) {
      case rainbow === true:
        let v1 = random();
        let v2 = random();
        let v3 = random();
        element.style.cssText = `background: rgb(${v1}, ${v2}, ${v3});`;
        break;
      case rainbow === false:
        element.style.cssText = `background: black;`;
    }
  }  
}



/* reset button section */


function delGrid() {
  /* Targets row-class elements and converts them to an array, which
  is then unpacked by a forEach loop to delete every matching element */
  const TARGET = document.getElementsByClassName('row');
  Array.from(TARGET).forEach((target) => {
    target.remove();    
  })
}


const BUTTON = document.querySelector('.reset');
BUTTON.addEventListener('click', () => {
  delGrid();
  genGrid();
  ROW_SLIDER_VALUE.textContent = 16;
  sliderRows = 16;
  COLUMN_SLIDER_VALUE.textContent = 16;
  columnRows = 16;
  COLUMN_SLIDER.value = 16;
  ROW_SLIDER.value = 16;
});


/* Slider related code */


let sliderRows = 16; /* see ROW_SLIDER event listener section below */
let sliderColumns = 16;


const ROW_SLIDER = document.querySelector("#row-slider");
const ROW_SLIDER_VALUE = document.querySelector('#row-slider-value');
ROW_SLIDER_VALUE.textContent = ROW_SLIDER.value; /* makes the current value of slider be displayed on the screen at any given time */


ROW_SLIDER.addEventListener('input', (e) => {
  /* Adjusts the rows on the grid upon interacting with the slider
  by changing the value of the sliderRows variable and then passing
  that value to the basic genGrid() function on top of the file.
  The current value of sliderColumns variable is also passed so as not 
  to default to 16 */
  ROW_SLIDER_VALUE.textContent = e.target.value;
  sliderRows = e.target.value;
  delGrid();
  genGrid(sliderRows, sliderColumns);
})


/* Same logic as above */
const COLUMN_SLIDER = document.querySelector("#column-slider");
const COLUMN_SLIDER_VALUE = document.querySelector("#column-slider-value");
COLUMN_SLIDER_VALUE.textContent = COLUMN_SLIDER.value;

COLUMN_SLIDER.addEventListener('input', (e) => {
  COLUMN_SLIDER_VALUE.textContent = e.target.value;
  sliderColumns = e.target.value;
  delGrid();
  genGrid(sliderRows, sliderColumns);
})