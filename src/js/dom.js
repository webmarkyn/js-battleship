import Ship from './ship';

const containerAppend = obj => {
  const container = document.getElementById('container');

  container.appendChild(obj);
};

const renderShips = shipsList => {
  const ships = document.createElement('div');
  ships.classList.add('ships');
  ships.id = 'shipsContainer';

  for (let i = 0; i < shipsList.length; i += 1) {
    const domShip = document.createElement('div');
    domShip.classList.add('ship');
    domShip.dataset.id = i;
    domShip.dataset.length = shipsList[i].length;
    for (let j = 0; j < shipsList[i].length; j += 1) {
      const shipsCell = document.createElement('div');
      domShip.appendChild(shipsCell);
    }
    ships.appendChild(domShip);
  }

  containerAppend(ships);
};

const moveToCursorPos = (element, event) => {
  element.style.left = `${event.pageX - element.offsetWidth / 2}px`;
  element.style.top = `${event.pageY - element.offsetHeight / 2}px`;
};

const removeShipsContainer = () => {
  const ships = document.getElementById('shipsContainer');
  ships.parentElement.removeChild(ships);
};

const createGridCell = ([i, j], history) => {
  const gridCell = document.createElement('div');
  gridCell.innerText = `${String.fromCharCode(65 + j)}${i}`;
  if (`${j},${i}` in history) {
    if (history[`${j},${i}`]) {
      gridCell.classList.add('damaged');
      gridCell.innerText = '💥';
    } else {
      gridCell.classList.add('missed');
      gridCell.innerText = '🌊';
    }
  }
  gridCell.classList.add('grid-cell');
  return gridCell;
};

const updateBoard = (dom, board, history, self) => {
  dom.innerHTML = '';
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      const cell = board[i][j];
      const domCell = createGridCell([i, j], history);
      if (self && cell instanceof Ship) domCell.classList.add('ship');
      domCell.dataset.coordinates = `${j} ${i}`;
      dom.appendChild(domCell);
    }
  }
  return dom.innerHTML;
};

const renderBoard = (name, gameboard, self) => {
  const { board } = gameboard;
  const { history } = gameboard;
  const domBoard = document.createElement('div');
  const title = document.createElement('h2');
  const boardGrid = document.createElement('div');
  boardGrid.classList.add('board-grid');
  boardGrid.id = `${name}Board`;
  domBoard.classList.add('board');
  title.innerText = `${name} Board`;
  boardGrid.innerHTML = updateBoard(boardGrid, board, history, self);
  domBoard.appendChild(title);
  domBoard.appendChild(boardGrid);
  containerAppend(domBoard);
};

export {
  renderBoard, renderShips, moveToCursorPos, updateBoard, removeShipsContainer,
};
