import "../assets/sass/styles.scss";
import Ship from "./ship";
import Gameboard from "./gameboard";
import { renderControls, renderBoard, renderShips, updateBoard } from "./dom";
import Player from "./player";
import ComputerPlayer from "./computerPlayer";
import { addShipsDragnDrop } from "./events";

const player = new Player(prompt('Enter your name'));
const computer = new ComputerPlayer();
renderBoard(player.name, player.gameboard, true);
renderShips(player.freeShips);
const ships = [...document.querySelectorAll(".ships .ship")];
const startGame = () => {
  computer.fillBoard();
  renderBoard(computer.name, computer.gameboard, false);
  let turn = player;
  const playerBoard = document.getElementById(`${player.name}Board`);
  const computerBoard = document.getElementById(`${computer.name}Board`);
  computerBoard.onclick = e => {
    if (turn === player) {
      let [x, y] = e.target.dataset.coordinates.split(" ");
      computer.gameboard.receiveAttack(x, y);
      // if (computer.gameboard.allSunk()) {
      //   computerBoard.onclick = null;
      //   alert('You Won!')
      // }
      console.log(player.gameboard.ships[0].isSunk())
      console.log(computer.gameboard.allSunk());
      x = computer.getRandomNum(9);
      y = computer.getRandomNum(9);
      player.gameboard.receiveAttack(x, y);
      // if (player.gameboard.allSunk()) {
      //   computerBoard.onclick = null
      //   alert('Computer Won!')
      // }
      playerBoard.innerHTML = updateBoard(
        playerBoard,
        player.gameboard.board,
        player.gameboard.history,
        true
      );
      computerBoard.innerHTML = updateBoard(
        computerBoard,
        computer.gameboard.board,
        computer.gameboard.history,
        false
      );
    }
  };
};
// startGame()
addShipsDragnDrop(ships, player, startGame);

// TODO: computer player
// TODO: idea: create predefined board templates for computer player
// TODO: add player ships (3 ships for a 5 x 5 board)
// TODO: winning method
