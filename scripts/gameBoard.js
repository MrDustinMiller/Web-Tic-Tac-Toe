import display from './displayController.js';

const gameBoard = {
  board: [],
  winPatterns: [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal from top left to bottom right
    [2, 4, 6], // diagonal from top right to bottom left
  ],

  init() {
    this.buildBoard();
  },

  buildBoard() {
    const table = document.createElement('table');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 9; i++) {
      const row = document.createElement('tr');
      const tableData = document.createElement('td');
      tableData.setAttribute('data-num', i);
      tableData.setAttribute('class', 'cell');
      display.displayController.boardDisplay.appendChild(table);
      display.displayController.boardDisplay.appendChild(row);
      display.displayController.boardDisplay.appendChild(tableData);
    }

    this.board.push(this.boardDisplay);
  },
};

export default { gameBoard };
