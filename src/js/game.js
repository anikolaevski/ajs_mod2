import Character from './domain.js';

class Game {
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
  Game,
  GameSavingData,
  readGameSaving,
  writeGameSaving
};