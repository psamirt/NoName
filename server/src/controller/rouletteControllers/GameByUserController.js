import {
  createServiceGameByUser,
  deleteServiceGameByUser,
  getServiceAllGamesByUser,
  getServiceGameByUserById,
  updateServiceGameByUser
} from '../../service/rouletteServices/GameByUserService.js';

async function createGameByUser(req, res) {
  try {
    const gameByUser = await createServiceGameByUser(req.body);
    res.status(201).json(gameByUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getGameByUserById(req, res) {
  try {
    const gameByUser = await getServiceGameByUserById(req.params.id);
    if (gameByUser) {
      res.json(gameByUser);
    } else {
      res.status(404).json({ error: 'Game by User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllGamesByUser(_req, res) {
  try {
    const gamesByUser = await getServiceAllGamesByUser();
    res.json(gamesByUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateGameByUser(req, res) {
  try {
    const [updated] = await updateServiceGameByUser(req.params.id, req.body);
    if (updated) {
      const updatedGameByUser = await getServiceGameByUserById(req.params.id);
      res.json(updatedGameByUser);
    } else {
      res.status(404).json({ error: 'Game by User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteGameByUser(req, res) {
  try {
    const deleted = await deleteServiceGameByUser(req.params.id);
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Game by User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export {
  createGameByUser,
  getGameByUserById,
  getAllGamesByUser,
  updateGameByUser,
  deleteGameByUser
};
