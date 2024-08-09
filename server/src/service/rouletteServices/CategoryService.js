import Category from "../../database/models/rouletteModel/Category.js";

async function createServiceCategory(data) {
  return Category.create(data);
}

async function getServiceCategoryById(id) {
  return Category.findByPk(id);
}

async function getServiceAllCategories() {
  return Category.findAll();
}

async function updateServiceCategory(id, data) {
  return Category.update(data, { where: { id } });
}

async function deleteServiceCategory(id) {
  return Category.destroy({ where: { id } });
}

export { createServiceCategory, getServiceCategoryById, getServiceAllCategories, updateServiceCategory, deleteServiceCategory };
