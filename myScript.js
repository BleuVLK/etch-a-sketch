function genGrid(rows = 16, columns = 16) {
  const GRID = document.querySelector('.grid');
  for (let i = 0; i < rows; i++) {
    const ROW = document.createElement('div');
    ROW.classList.toggle('row');
    for (let c = 0; c < columns; c++) {
      const COLUMN = document.createElement('div');
      COLUMN.classList.toggle('column');
      COLUMN.addEventListener('mouseover', () => {
          COLUMN.classList.add('coloured');
        });
      ROW.append(COLUMN);
    }
    GRID.append(ROW);
  }
}

genGrid();


function delGrid() {
  const TARGET = document.getElementsByClassName('row');
  Array.from(TARGET).forEach((target) => {
    target.remove();    
  })
}


const BUTTON = document.querySelector('.reset');
BUTTON.addEventListener('click', () => {
  delGrid();
  genGrid();
});