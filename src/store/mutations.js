import Player from './objects/Player';

// TODO: replace this when the backend will be available
const idGeneration = () => `_${Math.random().toString(36).substr(2, 9)}`;

export default {
  createPlayer: (state, obj) => {
    const player = new Player(idGeneration, obj.name);
    state.playerList.push(player);
  },
};
