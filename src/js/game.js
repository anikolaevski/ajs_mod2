import Character from './domain.js';

export class Game {
  start() {
    console.log('game started');
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