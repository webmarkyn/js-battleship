import Ship from "../src/js/ship";
import Gameboard from "../src/js/gameboard";

describe("Ship factory", () => {
  const ship = new Ship(1);
  it("return the length", () => {
    expect(ship.length).toBe(1);
  });
  it("returns true if all cells of ship were damaged", () => {
      ship.hit(0)
      expect(ship.isSunk()).toBe(true)
  })
});

describe("Gameboard", () => {
  const gameboard = new Gameboard()
  const ship1 = new Ship(2)
  const ship2 = new Ship(1)
  const ship3 = new Ship(1)
  it("places new ship on board based on given coords", () => {
    gameboard.placeShip(ship2, 5, 1)
    expect(gameboard.board[1][5]).toBe(ship2)
  })
  describe("receiveAttack() method", () => {
    it("invokes hit() if there was a ship on given coords", () => {
      gameboard.placeShip(ship1, 0, 0)
      gameboard.receiveAttack(0, 0)
      expect(gameboard.board[0][0].isSunk()).toBe(true)
    })
    it("marks cell if there was no ship", () => {
      gameboard.receiveAttack(2, 1)
      expect(gameboard.board[1][2]).toBe('X')
    })
  })
  describe("allSunk() method", () => {
    it("Return true if all ships were sunk", () => {
      expect(gameboard.allSunk()).toBe(true)
    })
    it("Return false if all ships were sunk", () => {
      gameboard.placeShip(ship3, 3, 2)
      expect(gameboard.allSunk()).toBe(true)
    })
    it("return false if there are no ships", () => {
      const newGameboard = new Gameboard()
      expect(newGameboard.allSunk()).toBe(false)
    })
  })

})