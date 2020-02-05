import "../assets/sass/styles.scss";
import Ship from "./ship";
import Gameboard from "./gameboard";
import {
  renderControls,
  renderBoard,
  renderShips,
  moveToCursorPos
} from "./dom";
import Player from "./player";

const player = new Player("Mark");
renderBoard(player.name, player.gameboard, true);
const mainBoard = document.getElementById(`${player.name}Board`);
console.log(mainBoard);
renderShips(player.freeShips);

const ships = [...document.querySelectorAll(".ships .ship")];

ships.forEach(ship => {
  ship.addEventListener("mousedown", e => {
    ship.style.position = "absolute";

    document.onmousemove = e => {
      moveToCursorPos(ship, e);
    };

    ship.onmouseup = e => {
      const shipLeft = ship.offsetLeft + ship.clientWidth - 15;
      const shipTop = ship.offsetTop + ship.clientHeight - 15;
      // console.log(shipLeft, shipRight)
      if (
        shipLeft > mainBoard.offsetLeft &&
        shipLeft < mainBoard.offsetLeft + mainBoard.clientWidth &&
        shipTop > mainBoard.offsetTop &&
        shipTop < mainBoard.offsetTop + mainBoard.clientHeight
      ) {
        const id = ship.dataset.id
        const ship = player.freeShips[id]
        
      } else {
        ship.style.position = "static";
      }
      document.onmousemove = null;
      ship.onmouseup = null;
    };
  });
});

// TODO: computer player
// TODO: idea: create predefined board templates for computer player
// TODO: add player ships (3 ships for a 5 x 5 board)
// TODO: winning method
