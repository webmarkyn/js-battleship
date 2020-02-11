import { moveToCursorPos, updateBoard } from './dom';

export default function addShipsDragnDrop(ships, player, callback) {
  const mainBoard = document.getElementById(`${player.name}Board`);
  ships.forEach(ship => {
    ship.addEventListener('mousedown', () => {
      ship.style.position = 'absolute';

      document.onmousemove = e => {
        moveToCursorPos(ship, e);
      };

      ship.onmouseup = () => {
        const shipLeft = ship.offsetLeft + ship.clientWidth - 15;
        const shipTop = ship.offsetTop + ship.clientHeight - 15;
        if (
          shipLeft > mainBoard.offsetLeft
          && shipLeft < mainBoard.offsetLeft + mainBoard.clientWidth
          && shipTop > mainBoard.offsetTop
          && shipTop < mainBoard.offsetTop + mainBoard.clientHeight
        ) {
          const cellWidth = mainBoard.clientWidth / 10;
          const shipToPlace = player.findShipByLength(ship.dataset.length);
          const x = Math.round((ship.offsetLeft - mainBoard.offsetLeft) / cellWidth);
          const y = Math.round((ship.offsetTop - mainBoard.offsetTop) / cellWidth);
          if (player.gameboard.placeShip(shipToPlace, x, y)) {
            player.removeShip(shipToPlace);
            mainBoard.innerHTML = updateBoard(
              mainBoard,
              player.gameboard.board,
              player.gameboard.history,
              true,
            );
            ship.outerHTML = '';
          } else ship.style.position = 'static';
        } else {
          ship.style.position = 'static';
        }
        document.onmousemove = null;
        ship.onmouseup = null;
        if (player.freeShips.length === 0) {
          callback();
        }
      };
    });
  });
}
