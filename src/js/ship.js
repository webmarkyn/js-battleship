export default class Ship {
  constructor(len) {
    this._length = len;
    this.damaged = new Array(len).fill(false);
  }

  // Changes the damaged state of ship's cell to true
  hit(index) {
    this.damaged[index] = true;
  }

  // will return true if all ship's cells are damaged
  isSunk() {
    return this.damaged.every(el => el);
  }

  // Returns the length of the ship
  get length() {
    return this._length;
  }
}
