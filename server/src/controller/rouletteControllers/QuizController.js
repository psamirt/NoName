import {
  createServiceQuiz,
  deleteServiceQuiz,
  getServiceAllQuizzes,
  getServiceQuizById,
  updateServiceQuiz
} from '../../service/rouletteServices/QuizService.js';

async function createQuiz(req, res) {
  try {
    const quiz = await createServiceQuiz(req.body);
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getQuizById(req, res) {
  try {
    const quiz = await getServiceQuizById(req.params.id);
    if (quiz) {
      res.json(quiz);
    } else {
      res.status(404).json({ error: 'Quiz not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllQuizzes(_req, res) {
  try {
    const quizzes = await getServiceAllQuizzes();
    res.json(quizzes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateQuiz(req, res) {
  try {
    const [updated] = await updateServiceQuiz(req.params.id, req.body);
    if (updated) {
      const updatedQuiz = await getServiceQuizById(req.params.id);
      res.json(updatedQuiz);
    } else {
      res.status(404).json({ error: 'Quiz not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteQuiz(req, res) {
  try {
    const deleted = await deleteServiceQuiz(req.params.id);
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Quiz not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export { createQuiz, getQuizById, getAllQuizzes, updateQuiz, deleteQuiz };
