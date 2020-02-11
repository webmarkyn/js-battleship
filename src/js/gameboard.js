export default class Gameboard {
  constructor() {
    this.board = new Array(10).fill().map(() => new Array(10).fill());
    this.ships = [];
    this.history = {};
  }

  // This function puts reference to the Ship instance to array so when you
  // call ship methods on the board cell,
  // were the ship is placed, it gets called directly on class instance
  checkValid(ship, x, y) {
    const { length } = ship;
    if (x < 0 || y < 0) return false;
    for (let i = 0; i < ship.length; i += 1) {
      if (this.board[y][x + i] !== undefined) return false;
    }
    if (this.board[y + 1]) {
      for (let i = x - 1; i <= x + length; i += 1) {
        if (this.board[y + 1][i] !== undefined) return false;
      }
    }
    if (this.board[y - 1]) {
      for (let i = x - 1; i <= x + length; i += 1) {
        if (this.board[y - 1][i] !== undefined) return false;
      }
    }
    if (
      this.board[y][x - 1] !== undefined
      || this.board[y][x + length] !== undefined
    ) {
      return false;
    }
    return true;
  }

  placeShip(ship, x, y) {
    if (!this.checkValid(ship, x, y)) return false;
    this.ships.push(ship);
    for (let i = 0; i < ship.length; i += 1) {
      this.board[y][x + i] = ship;
    }
    return true;
  }

  // This function invokes ship's hit() method based on given coordinates
  receiveAttack(x, y) {
    const cell = this.board[y][x];
    if (this.history[`${x},${y}`] !== undefined) return false;
    if (!cell) {
      this.history[`${x},${y}`] = false;
      return true;
    }
    // Because hit() takes index as an argument we must find what's cell's number for the ship
    // So we find the index first appearance of this ship in a row
    const startPos = this.board[y].indexOf(cell);
    // Find the difference between given x coord and first appearance
    // That gives us a serial number of cell for the ship
    const cellNum = x - startPos;
    // And then we call hit() method on that array index
    cell.hit(cellNum);
    this.history[`${x},${y}`] = true;
    return true;
  }

  allSunk() {
    if (this.ships.length === 0) return false;
    return this.ships.every(ship => ship.isSunk());
  }
}
