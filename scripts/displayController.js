import controller from './gameController.js';

const displayController = (() => {
  const cacheDom = () => {
    displayController.boardDisplay = document.querySelector('.gameboard');
    displayController.gameOverlayArea = document.querySelector('.game-area');
  };

  const displayPlayerTurn = () => {
    controller.gameController.turnDisplay.textContent = `${controller.gameController.currentPlayer.player}'s turn!`;
  };

  const wipeDisplay = () => {
    controller.gameController.gamebox.forEach((items) => {
      const item = items;
      item.textContent = '';
    });
    displayController.gameOverlay.style.display = 'none';
    displayPlayerTurn();
  };

  const eventListeners = (restartBtn, closeBtn, wrapper) => {
    const modalWrapper = wrapper;
    restartBtn.addEventListener('click', wipeDisplay);
    closeBtn.addEventListener('click', () => {
      modalWrapper.style.display = 'none';
    });
  };

  const displayModal = () => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    const closeBtn = document.createElement('i');
    closeBtn.setAttribute('class', 'fa-regular fa-x');
    wrapper.appendChild(closeBtn);
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    wrapper.appendChild(container);
    displayController.modalWinMsg = document.createElement('p');
    displayController.modalWinMsg.style.color = 'white';
    container.appendChild(displayController.modalWinMsg);
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Play Again?';
    container.appendChild(restartBtn);
    displayController.gameOverlay.appendChild(wrapper);
    eventListeners(restartBtn, closeBtn, wrapper);
  };

  const displayOverlay = () => {
    displayController.gameOverlay = document.createElement('div');
    displayController.gameOverlay.setAttribute('class', 'overlay');
    displayController.gameOverlayArea.appendChild(
      displayController.gameOverlay
    );
    displayModal();
  };

  const init = () => {
    cacheDom();
  };

  return { init, overlay: displayOverlay, displayPlayer: displayPlayerTurn };
})();

export default { displayController };
