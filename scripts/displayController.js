const displayController = (() => {
  const init = () => {
    cacheDom();
  };

  const cacheDom = () => {
    displayController.boardDisplay = document.querySelector('.gameboard');
    // displayController.markerChoices =
    //   document.querySelector('.choices').children;
    displayController.winnerDisplay =
      document.querySelector('.winning-display');
  };

  return { init };
})();

export default { displayController };
