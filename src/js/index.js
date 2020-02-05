import '../assets/sass/styles.scss';
import Ship from "./ship";
import Gameboard from "./gameboard";
import { renderControls, renderEnemyBoard, renderSelfBoard } from './dom';

renderSelfBoard();
renderEnemyBoard();
renderControls();

// TODO: computer player
// TODO: idea: create predefined board templates for computer player
// TODO: add player ships (3 ships for a 5 x 5 board)
// TODO: winning method