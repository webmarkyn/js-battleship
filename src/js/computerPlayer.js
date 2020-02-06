import Player from "./player";

export default class ComputerPlayer extends Player {
  constructor() {
    super("Computer");
  }

  getRandomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  fillBoard() {
    while (this.freeShips.length > 0) {
      const ship = this.freeShips[0]
      const max = 10 - ship.length
      let x = this.getRandomNum(max)
      let y = this.getRandomNum(9)
      this.freeShips.shift()
      let ret = this.gameboard.placeShip(ship, x ,y)
      let sub_c = 0
      while (!ret && sub_c < 200) {
        x = this.getRandomNum(max)
        y = this.getRandomNum(9)
        ret = this.gameboard.placeShip(ship, x ,y)
        sub_c++
      }
      if (sub_c >= 200) {
        alert('Error ocured please reload the page')
      }
    }
  }
}
