import Difficulty from "../../database/models/rouletteModel/Difficulty.js";

async function createServiceDifficulty(data) {
  return Difficulty.create(data);
}

async function getServiceDifficultyById(id) {
  return Difficulty.findByPk(id);
}

async function getServiceAllDifficulties() {
  return Difficulty.findAll();
}

async function updateServiceDifficulty(id, data) {
  return Difficulty.update(data, { where: { id } });
}

async function deleteServiceDifficulty(id) {
  return Difficulty.destroy({ where: { id } });
}

export { createServiceDifficulty, getServiceDifficultyById, getServiceAllDifficulties, updateServiceDifficulty, deleteServiceDifficulty };
