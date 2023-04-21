import board from './gameBoard.js';
import display from './displayController.js';
import gameBoard from './gameBoard.js';

const gameController = {
  bindEvents() {
    const array = Array.from(display.displayController.markerChoices);
    array.forEach((item) =>
      item.addEventListener('click', gameController.getPlayerMarker, false)
    );

    this.gamebox = document.querySelectorAll('.cell');
    this.gamebox.forEach((item) =>
      item.addEventListener('click', gameController.addPlayerMarker)
    );
  },

  makeCharacter(marker) {
    const player = marker;
    return { player };
  },

  checkForWin() {
    const array = Array.from(this.gamebox);
    const markedBoard = array.filter((item) => item.textContent !== '');
    // const xMarkersOnBoard = array.filter((item) => item.textContent === 'X');
    // const oMarkersOnBoard = array.filter((item) => item.textContent === 'O');

    for (let i = 0; i < board.gameBoard.winPatterns.length; i += 1) {
      const pattern = board.gameBoard.winPatterns[i];
      const markedCells = markedBoard.filter((cell) =>
        pattern.includes(parseInt(cell.dataset.num, 10))
      );
      if (markedCells.length === 3) {
        const markers = markedCells.map((cell) => cell.textContent);
        if (markers.every((marker) => marker === 'X')) {
          display.displayController.winnerDisplay.textContent = `${gameController.currentPlayer.player} wins!`;
          return;
        }
        if (markers.every((marker) => marker === 'O')) {
          display.displayController.winnerDisplay.textContent = `${gameController.currentPlayer.player} wins!`;
          return;
        }
      }
    }
  },

  getPlayerMarker() {
    board.gameBoard.playerMarker = this.innerText || 'X';
    const player = gameController.makeCharacter(board.gameBoard.playerMarker);
    console.log(player);
    gameController.currentPlayer = player;
  },

  addPlayerMarker() {
    // below is testing, def fix it
    const marker = gameController.currentPlayer.player === 'X' ? 'O' : 'X';
    console.log(marker);
    // prevent user from overwriting marker on any cell
    if (this.textContent !== '') return;

    // 'this' is referring to the specefic element that calls this function from bindEvents()
    if (marker === 'O') {
      this.textContent = `${gameController.currentPlayer.player}`;
    } else {
      this.textContent = `${gameController.currentPlayer.player}`;
    }
    gameController.checkForWin();
  },
};

export default { gameController };
