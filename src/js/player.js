import Gameboard from "./gameboard";
import Ship from "./ship";

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

  removeShips(id) {
    this.freeShips.splice(id, 1)
  }
}
