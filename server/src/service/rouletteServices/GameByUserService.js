import GameByUser from "../../database/models/rouletteModel/GameByUser.js";

async function createServiceGameByUser(data) {
  return GameByUser.create(data);
}

async function getServiceGameByUserById(id) {
  return GameByUser.findByPk(id);
}

async function getServiceAllGamesByUser() {
  return GameByUser.findAll();
}

async function updateServiceGameByUser(id, data) {
  return GameByUser.update(data, { where: { id } });
}

async function deleteServiceGameByUser(id) {
  return GameByUser.destroy({ where: { id } });
}

export { createServiceGameByUser, getServiceGameByUserById, getServiceAllGamesByUser, updateServiceGameByUser, deleteServiceGameByUser };
