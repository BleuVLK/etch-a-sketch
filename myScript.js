const GENERATE = document.querySelector('#generate');
GENERATE.addEventListener('click', () => {
  generateGrid(row, column);
})

let row = 16; 
let column = 16;

function generateGrid(row, column) {
  /* generates a grid by creating an amount of rows which is 
  filled by a given amount of items through a loop*/
  const BOX = document.querySelector('.grid-box');
  for (let i = 0; i <= row; i++) {
    const GRID_ROW = document.createElement('div');
    GRID_ROW.classList.toggle('row');
    GRID_ROW.style.cssText = 'display: flex;'
    for (let c = 0; c <= column; c++) {
      const GRID_COLUMN = document.createElement('div');
      GRID_COLUMN.classList.toggle('column');
      GRID_COLUMN.addEventListener('mouseover', () => {
        changeColour(GRID_COLUMN);
      })
      GRID_ROW.append(GRID_COLUMN);
    }
    BOX.append(GRID_ROW);
  }
}

function changeColour(element) {
  element.classList.add('change-colour');
}
