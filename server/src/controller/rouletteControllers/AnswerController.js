import {
    createServiceAnswer,
    getServiceAnswerById,
    getServiceAllAnswers,
    updateServiceAnswer,
    deleteServiceAnswer
  } from '../../service/rouletteServices/AnswerService.js';
  
  async function createAnswer(req, res) {
    try {
      const answer = await createServiceAnswer(req.body);
      res.status(201).json(answer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function getAnswerById(req, res) {
    try {
      const answer = await getServiceAnswerById(req.params.id);
      if (answer) {
        res.json(answer);
      } else {
        res.status(404).json({ error: 'Answer not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function getAllAnswers(_req, res) {
    try {
      const answers = await getServiceAllAnswers();
      res.json(answers);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function updateAnswer(req, res) {
    try {
      const [updated] = await updateServiceAnswer(req.params.id, req.body);
      if (updated) {
        const updatedAnswer = await getServiceAnswerById(req.params.id);
        res.json(updatedAnswer);
      } else {
        res.status(404).json({ error: 'Answer not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function deleteAnswer(req, res) {
    try {
      const deleted = await deleteServiceAnswer(req.params.id);
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Answer not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  export { createAnswer, getAnswerById, getAllAnswers, updateAnswer, deleteAnswer };
  