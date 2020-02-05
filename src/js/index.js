import '../assets/sass/styles.scss';
import Ship from "./ship";
import Gameboard from "./gameboard";
import { renderControls, renderEnemyBoard, renderSelfBoard } from './dom';

renderSelfBoard();
renderEnemyBoard();
renderControls();