import board from './gameBoard.js';
import display from './displayController.js';
import controller from './gameController.js';

display.displayController.init();
board.gameBoard.init();
// working on below, might delete last two (not init)
controller.gameController.init();
// controller.gameController.bindEvents();
// controller.gameController.setPlayerMarker();
