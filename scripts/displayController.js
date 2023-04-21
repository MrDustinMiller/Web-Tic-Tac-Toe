const displayController = {
  init() {
    this.cacheDom();
  },

  cacheDom() {
    this.boardDisplay = document.querySelector('.gameboard');
    this.markerChoices = document.querySelector('.choices').children;
    this.winnerDisplay = document.querySelector('.winning-display');
  },
};

export default { displayController };
