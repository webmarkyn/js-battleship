import Gameboard from './gameboard';
import Ship from './ship';

export default class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
    this.freeShips = [
      new Ship(4),
      new Ship(3),
      new Ship(3),
      new Ship(2),
      new Ship(2),
      new Ship(2),
      new Ship(1),
      new Ship(1),
      new Ship(1),
      new Ship(1),
    ];
  }

  findShipByLength(len) {
    return this.freeShips.filter(ship => ship.length == len)[0];
  }

  removeShip(ship) {
    this.freeShips.splice(this.freeShips.indexOf(ship), 1);
  }

  getLastShip() {
    return this.freeShips[this.freeShips.length - 1];
  }
}
