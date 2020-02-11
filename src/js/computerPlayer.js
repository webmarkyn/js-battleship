import Player from './player';
import getRandomNum from './helper';
import { setTitle } from './dom';

export default class ComputerPlayer extends Player {
  constructor() {
    super('Computer');
  }

  fillBoard() {
    while (this.freeShips.length > 0) {
      const ship = this.freeShips[0];
      const max = 10 - ship.length;
      let x = getRandomNum(max);
      let y = getRandomNum(9);
      this.freeShips.shift();
      let ret = this.gameboard.placeShip(ship, x, y);
      let subC = 0;
      while (!ret && subC < 200) {
        x = getRandomNum(max);
        y = getRandomNum(9);
        ret = this.gameboard.placeShip(ship, x, y);
        subC += 1;
      }
      if (subC >= 200) {
        setTitle('Error ocured please reload the page');
      }
    }
  }
}
