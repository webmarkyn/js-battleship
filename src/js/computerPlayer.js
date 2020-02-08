import Player from './player';

export default class ComputerPlayer extends Player {
  constructor() {
    super('Computer');
  }

  getRandomNum(max) {
    return this.Math.floor(Math.random() * Math.floor(max));
  }

  getRandomCoords(max) {
    return [this.getRandomNum(max), this.getRandomNum(max)];
  }

  fillBoard() {
    while (this.freeShips.length > 0) {
      const ship = this.freeShips[0];
      const max = 10 - ship.length;
      let x = this.getRandomNum(max);
      let y = this.getRandomNum(9);
      this.freeShips.shift();
      let ret = this.gameboard.placeShip(ship, x, y);
      let subC = 0;
      while (!ret && subC < 200) {
        x = this.getRandomNum(max);
        y = this.getRandomNum(9);
        ret = this.gameboard.placeShip(ship, x, y);
        subC += 1;
      }
      if (subC >= 200) {
        alert('Error ocured please reload the page');
      }
    }
  }
}
