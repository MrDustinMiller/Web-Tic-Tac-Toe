import board from './gameBoard.js';
import display from './displayController.js';
import controller from './gameController.js';

display.displayController.init();
board.gameBoard.init();
controller.gameController.bindEvents();
controller.gameController.getPlayerMarker();
