import board from './gameBoard.js';
import display from './displayController.js';

const gameController = (() => {
  const init = () => {
    bindEvents();
    // cacheDom();
    setPlayerMarker();
  };

  // const cacheDom = () => {
  //   gameController.gamebox = document.querySelectorAll('.cell');
  // };

  const bindEvents = () => {
    // const array = Array.from(display.displayController.markerChoices);
    // array.forEach((item) => item.addEventListener('click', getPlayerMarker));
    gameController.gamebox = document.querySelectorAll('.cell');
    gameController.gamebox.forEach((item) =>
      item.addEventListener('click', addPlayerMarker)
    );
  };

  const makeCharacter = (marker) => {
    const player = marker;
    return { player };
  };

  const checkForWin = () => {
    const array = Array.from(gameController.gamebox);
    const markedBoard = array.filter((item) => item.textContent !== '');
    // const xMarkersOnBoard = array.filter((item) => item.textContent === 'X');
    // const oMarkersOnBoard = array.filter((item) => item.textContent === 'O');

    for (let i = 0; i < board.gameBoard.boardObj.winPatterns.length; i += 1) {
      const pattern = board.gameBoard.boardObj.winPatterns[i];
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
  };

  const setPlayerMarker = () => {
    board.gameBoard.playerMarker = 'X';
    const player = makeCharacter(board.gameBoard.playerMarker);
    gameController.currentPlayer = player;
  };

  const addPlayerMarker = (e) => {
    // prevent user from overwriting marker on any cell
    if (e.target.textContent !== '') return;

    // should only need this one line because i should flip the player marker on each turn (really should have 2 seperate player objects though)
    e.target.textContent = `${gameController.currentPlayer.player}`;

    checkForWin();
    gameController.currentPlayer.player =
      gameController.currentPlayer.player === 'X' ? 'O' : 'X';
  };

  return { init, setPlayerMarker };
})();

export default { gameController };
