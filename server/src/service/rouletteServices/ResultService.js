import Result from "../../database/models/rouletteModel/Result.js";

async function createServiceResult(data) {
  return Result.create(data);
}

async function getServiceResultById(id) {
  return Result.findByPk(id);
}

async function getServiceAllResults() {
  return Result.findAll();
}

async function updateServiceResult(id, data) {
  return Result.update(data, { where: { id } });
}

async function deleteServiceResult(id) {
  return Result.destroy({ where: { id } });
}

export { createServiceResult, getServiceResultById, getServiceAllResults, updateServiceResult, deleteServiceResult };
