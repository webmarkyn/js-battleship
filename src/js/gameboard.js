export default class Gameboard {
  constructor(params) {
    this.board = new Array(10).fill().map(u => new Array(10).fill());
    this.ships = []
  }

  // This function puts reference to the Ship instance to array so when you
  // call ship methods on the board cell,
  // were the ship is placed, it gets called directly on class instance
  placeShip(ship, x, y) {
    if (this.board[y][x] !== undefined || this.ships.includes(ship)) return false
    this.ships.push(ship)
    for (let i = 0; i < ship.length; i++) {
      this.board[y][x + i] = ship;
    }
  }

  // This function invokes ship's hit() method based on given coordinates
  receiveAttack(x, y) {
    const cell = this.board[y][x];
    if (!cell) {
      this.board[y][x] = "X";
      return false;
    }
    // Because hit() takes index as an argument we must find what's cell's number for the ship
    // So we find the index first appearance of this ship in a row
    const startPos = this.board[y].indexOf(cell);
    // Find the difference between given x coord and first appearance
    // That gives us a serial number of cell for the ship
    const cellNum = x - startPos;
    // And then we call hit() method on that array index
    cell.hit(cellNum);
    return true;
  }

  allSunk() {
    if (this.ships.length === 0) return false
    return this.ships.every(ship => ship.isSunk())
  }
}
