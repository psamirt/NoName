import {
  createServiceUser,
  deleteUserService,
  getServiceAllUsers,
  getUserServiceById,
  updateServiceUser
} from '../../service/userServices/userService.js';

async function createUser(req, res) {
  try {
    const user = await createServiceUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUserById(req, res) {
  try {
    const user = await getUserServiceById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllUsers(_req, res) {
  try {
    const users = await getServiceAllUsers();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const [updated] = await updateServiceUser(req.params.id, req.body);
    if (updated) {
      const updatedUser = await getUserById(req.params.id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const deleted = await deleteUserService(req.params.id);
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export { deleteUser, createUser, getAllUsers, getUserById, updateUser };
