import Ship from "../src/ship";

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
