import {
    createServiceGame,
    getServiceGameById,
    getServiceAllGames,
    updateServiceGame,
    deleteServiceGame
  } from '../../service/rouletteServices/AnswerService.js';
  
  async function createGame(req, res) {
    try {
      const game = await createServiceGame(req.body);
      res.status(201).json(game);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function getGameById(req, res) {
    try {
      const game = await getServiceGameById(req.params.id);
      if (game) {
        res.json(game);
      } else {
        res.status(404).json({ error: 'Game not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function getAllGames(_req, res) {
    try {
      const games = await getServiceAllGames();
      res.json(games);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function updateGame(req, res) {
    try {
      const [updated] = await updateServiceGame(req.params.id, req.body);
      if (updated) {
        const updatedGame = await getServiceGameById(req.params.id);
        res.json(updatedGame);
      } else {
        res.status(404).json({ error: 'Game not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function deleteGame(req, res) {
    try {
      const deleted = await deleteServiceGame(req.params.id);
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Game not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  export { createGame, getGameById, getAllGames, updateGame, deleteGame };
  