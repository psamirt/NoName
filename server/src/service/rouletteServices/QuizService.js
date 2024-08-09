import Quiz from "../../database/models/rouletteModel/Quiz.js";

async function createServiceQuiz(data) {
  return Quiz.create(data);
}

async function getServiceQuizById(id) {
  return Quiz.findByPk(id);
}

async function getServiceAllQuizzes() {
  return Quiz.findAll();
}

async function updateServiceQuiz(id, data) {
  return Quiz.update(data, { where: { id } });
}

async function deleteServiceQuiz(id) {
  return Quiz.destroy({ where: { id } });
}

export { createServiceQuiz, getServiceQuizById, getServiceAllQuizzes, updateServiceQuiz, deleteServiceQuiz };
