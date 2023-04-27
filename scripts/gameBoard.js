import display from './displayController.js';

const gameBoard = (() => {
  const boardObj = {
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
  };

  const buildBoard = () => {
    const grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    for (let i = 0; i < 9; i += 1) {
      const cell = document.createElement('div');
      cell.setAttribute('data-num', i);
      cell.setAttribute('class', 'cell');
      display.displayController.boardDisplay.appendChild(grid);
      grid.appendChild(cell);
    }

    boardObj.board.push(display.displayController.boardDisplay);
  };

  const init = () => {
    buildBoard();
  };

  return { init, boardObj };
})();

export default { gameBoard };
