import board from './gameBoard.js';
import display from './displayController.js';

const gameController = (() => {
  let gameCount = 0;

  const checkForWin = () => {
    const array = Array.from(gameController.gamebox);
    const markedBoard = array.filter((item) => item.textContent !== '');

    for (let i = 0; i < board.gameBoard.boardObj.winPatterns.length; i += 1) {
      const pattern = board.gameBoard.boardObj.winPatterns[i];
      const markedCells = markedBoard.filter((cell) =>
        pattern.includes(parseInt(cell.dataset.num, 10))
      );
      if (markedCells.length === 3) {
        const markers = markedCells.map((cell) => cell.textContent);
        if (markers.every((marker) => marker === 'X')) {
          gameController.turnDisplay.textContent = `${gameController.currentPlayer.player} wins!`;
          return 1;
        }
        if (markers.every((marker) => marker === 'O')) {
          gameController.turnDisplay.textContent = `${gameController.currentPlayer.player} wins!`;
          return 1;
        }
      }
    }
    return 0;
  };

  const changePlayerMarker = () => {
    gameController.currentPlayer.player =
      gameController.currentPlayer.player === 'X' ? 'O' : 'X';
  };

  const addPlayerMarker = (e) => {
    gameCount += 1;
    console.log(gameCount);
    // prevent user from overwriting marker on any cell
    if (e.target.textContent !== '') return;

    // should only need this one line because i should flip the player marker on each turn (really should have 2 seperate player objects though)
    e.target.textContent = `${gameController.currentPlayer.player}`;

    // someone won if return = 1
    const winValue = checkForWin();
    if (winValue === 1) {
      display.displayController.overlay();
      display.displayController.modalWinMsg.textContent = `${gameController.currentPlayer.player} wins!`;
      gameCount = 0;
      return;
    }

    if (gameCount === 9) {
      display.displayController.overlay();
      display.displayController.modalWinMsg.textContent = `It's a tie!`;
      gameCount = 0;
    }

    changePlayerMarker();
    display.displayController.displayPlayer();
  };

  const bindEvents = () => {
    gameController.gamebox = document.querySelectorAll('.cell');
    gameController.gamebox.forEach((item) =>
      item.addEventListener('click', addPlayerMarker)
    );
  };

  const cacheDom = () => {
    gameController.turnDisplay = document.querySelector('.turnDisplay');
    gameController.gameArea = document.querySelector('.game-area');
  };

  const makeCharacter = (marker) => {
    const player = marker;
    return { player };
  };

  const setPlayerMarker = () => {
    board.gameBoard.playerMarker = 'X';
    const player = makeCharacter(board.gameBoard.playerMarker);
    gameController.currentPlayer = player;
  };

  const init = () => {
    bindEvents();
    setPlayerMarker();
    cacheDom();
    display.displayController.displayPlayer();
  };

  return { init, setPlayerMarker };
})();

export default { gameController };
