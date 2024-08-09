import AnswerOption from "../../database/models/rouletteModel/AnswerOption.js";

async function createServiceAnswerOption(data) {
  return AnswerOption.create(data);
}

async function getServiceAnswerOptionById(id) {
  return AnswerOption.findByPk(id);
}

async function getServiceAllAnswerOptions() {
  return AnswerOption.findAll();
}

async function updateServiceAnswerOption(id, data) {
  return AnswerOption.update(data, { where: { id } });
}

async function deleteServiceAnswerOption(id) {
  return AnswerOption.destroy({ where: { id } });
}

export { createServiceAnswerOption, getServiceAnswerOptionById, getServiceAllAnswerOptions, updateServiceAnswerOption, deleteServiceAnswerOption };
