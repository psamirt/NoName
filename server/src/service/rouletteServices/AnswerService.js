import Answer from "../../database/models/rouletteModel/Answer.js";

async function createServiceAnswer(data) {
  return Answer.create(data);
}

async function getServiceAnswerById(id) {
  return Answer.findByPk(id);
}

async function getServiceAllAnswers() {
  return Answer.findAll();
}

async function updateServiceAnswer(id, data) {
  return Answer.update(data, { where: { id } });
}

async function deleteServiceAnswer(id) {
  return Answer.destroy({ where: { id } });
}

export { createServiceAnswer, getServiceAnswerById, getServiceAllAnswers, updateServiceAnswer, deleteServiceAnswer };
