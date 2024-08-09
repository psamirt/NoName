import User from "../../database/models/userModel/User.js";
async function createServiceUser(data) {
  return User.create(data);
}

async function getUserServiceById(id) {
  return User.findByPk(id);
}

async function getServiceAllUsers() {
  return User.findAll();
}

async function updateServiceUser(id, data) {
  return User.update(data, { where: { id } });
}

async function deleteUserService(id) {
  return User.destroy({ where: { id } });
}

export { createServiceUser, getServiceAllUsers, deleteUserService, getUserServiceById, updateServiceUser };
