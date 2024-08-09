import {
    createServiceResult,
    getServiceResultById,
    getServiceAllResults,
    updateServiceResult,
    deleteServiceResult
  } from'../../service/rouletteServices/AnswerService.js';
  
  async function createResult(req, res) {
    try {
      const result = await createServiceResult(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function getResultById(req, res) {
    try {
      const result = await getServiceResultById(req.params.id);
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: 'Result not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function getAllResults(_req, res) {
    try {
      const results = await getServiceAllResults();
      res.json(results);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function updateResult(req, res) {
    try {
      const [updated] = await updateServiceResult(req.params.id, req.body);
      if (updated) {
        const updatedResult = await getServiceResultById(req.params.id);
        res.json(updatedResult);
      } else {
        res.status(404).json({ error: 'Result not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function deleteResult(req, res) {
    try {
      const deleted = await deleteServiceResult(req.params.id);
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Result not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  export { createResult, getResultById, getAllResults, updateResult, deleteResult };
  