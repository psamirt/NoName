import Game from "../../database/models/rouletteModel/Game.js";

async function createServiceGame(data) {
  return Game.create(data);
}

async function getServiceGameById(id) {
  return Game.findByPk(id);
}

async function getServiceAllGames() {
  return Game.findAll();
}

async function updateServiceGame(id, data) {
  return Game.update(data, { where: { id } });
}

async function deleteServiceGame(id) {
  return Game.destroy({ where: { id } });
}

export { createServiceGame, getServiceGameById, getServiceAllGames, updateServiceGame, deleteServiceGame };
