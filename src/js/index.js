import '../assets/sass/styles.scss';
import {
  renderBoard, renderShips, updateBoard, removeShipsContainer, setTitle,
} from './dom';
import Player from './player';
import ComputerPlayer from './computerPlayer';
import addShipsDragnDrop from './events';
import getRandomNum from './helper';

// Initialize varielble
const player = new Player('Player');
const computer = new ComputerPlayer();
renderBoard(player.name, player.gameboard, true);
renderShips(player.freeShips);
const ships = [...document.querySelectorAll('.ships .ship')];
setTitle('Drag and drop ships onto the Board');

// Starts when all ships are placed
const startGame = () => {
  setTitle('You are playing agains AI');
  // ships container will be removed
  removeShipsContainer();
  // AI places ships on to the board
  computer.fillBoard();
  renderBoard(computer.name, computer.gameboard, false);
  const playerBoard = document.getElementById(`${player.name}Board`);
  const computerBoard = document.getElementById(`${computer.name}Board`);

  // Event listener for AI's board
  computerBoard.onclick = e => {
    // If somehow clicked element wasn't a cell - exit
    if (!e.target.dataset.coordinates) return;
    // Take coordinates from clicked cell
    let [x, y] = e.target.dataset.coordinates.split(' ');
    // If attack was succesfull (cell hasn't been atacked before)
    if (computer.gameboard.receiveAttack(x, y)) {
      // If AI has no living ships
      if (computer.gameboard.allSunk()) {
        computerBoard.onclick = null;
        setTitle('You Won!');
      }
      // Get random coordinates
      x = getRandomNum(10);
      y = getRandomNum(10);
      // Try to hit player's board
      let hit = player.gameboard.receiveAttack(x, y);
      // If attack wasn't successfull (cell has been atacked before)
      while (!hit) {
        // Try again until it works
        x = getRandomNum(10);
        y = getRandomNum(10);
        hit = player.gameboard.receiveAttack(x, y);
      }
      // If players has no living ships
      if (player.gameboard.allSunk()) {
        computerBoard.onclick = null;
        setTitle('Computer Won!');
      }
      // Update boards
      playerBoard.innerHTML = updateBoard(
        playerBoard,
        player.gameboard.board,
        player.gameboard.history,
        true,
      );
      computerBoard.innerHTML = updateBoard(
        computerBoard,
        computer.gameboard.board,
        computer.gameboard.history,
        false,
      );
    }
  };
};
addShipsDragnDrop(ships, player, startGame);
