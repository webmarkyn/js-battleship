export default class Ship {
    constructor(len) {
        this._length = len
        this.damaged = new Array(len).fill(false)
        this.sunk = false
    }

    hit(index) {
        this.damaged[index] = true
    }

    isSunk() {
        return this.damaged.every((el) => true)
    }

    get length() {
        return this._length
    }
}