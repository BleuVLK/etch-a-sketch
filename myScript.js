const GENERATE = document.querySelector('#generate');
GENERATE.addEventListener('click', () => {
  generateGrid(row, column);
})

let row = 16; 
let column = 16;

function generateGrid(row, column) {
  const BOX = document.querySelector('.grid');
  for (let i = 0; i <= row; i++) {
    const GRID_ROW = document.createElement('div');
    GRID_ROW.classList.toggle('row');
    GRID_ROW.style.cssText = 'border: 1px solid black; display: flex; gap: 1em;'
    for (let c = 0; c <= column; c++) {
      const GRID_COLUMN = document.createElement('div');
      GRID_COLUMN.classList.toggle('column');
      GRID_COLUMN.style.cssText = 'border: 1px solid black;'
      GRID_COLUMN.textContent = c;
      GRID_ROW.append(GRID_COLUMN);
    }
    BOX.append(GRID_ROW);
  }
}