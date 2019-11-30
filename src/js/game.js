import Character from './domain.js';

export class Game {
  start() {
    console.log('game started');
    document.write('<p class="infostring">game started</p>');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export default {
  GameSavingData,
  readGameSaving,
  writeGameSaving
};