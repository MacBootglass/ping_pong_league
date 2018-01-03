import Player from './objects/Player';

// TODO: replace this when the backend will be available
const idGeneration = () => `_${Math.random().toString(36).substr(2, 9)}`;

export default {
  createPlayer: (state, name) => {
    const player = new Player(idGeneration, name);
    state.playerList.push(player);
  },
};
