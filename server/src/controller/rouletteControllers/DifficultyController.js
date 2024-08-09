import {
    createServiceDifficulty,
    getServiceDifficultyById,
    getServiceAllDifficulties,
    updateServiceDifficulty,
    deleteServiceDifficulty
  } from '../../service/rouletteServices/DifficultyService.js';
  
  async function createDifficulty(req, res) {
    try {
      const difficulty = await createServiceDifficulty(req.body);
      res.status(201).json(difficulty);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function getDifficultyById(req, res) {
    try {
      const difficulty = await getServiceDifficultyById(req.params.id);
      if (difficulty) {
        res.json(difficulty);
      } else {
        res.status(404).json({ error: 'Difficulty not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function getAllDifficulties(_req, res) {
    try {
      const difficulties = await getServiceAllDifficulties();
      res.json(difficulties);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function updateDifficulty(req, res) {
    try {
      const [updated] = await updateServiceDifficulty(req.params.id, req.body);
      if (updated) {
        const updatedDifficulty = await getServiceDifficultyById(req.params.id);
        res.json(updatedDifficulty);
      } else {
        res.status(404).json({ error: 'Difficulty not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function deleteDifficulty(req, res) {
    try {
      const deleted = await deleteServiceDifficulty(req.params.id);
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Difficulty not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  export { createDifficulty, getDifficultyById, getAllDifficulties, updateDifficulty, deleteDifficulty };
  