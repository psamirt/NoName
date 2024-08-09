import {
  createServiceAnswerOption,
  deleteServiceAnswerOption,
  getServiceAllAnswerOptions,
  getServiceAnswerOptionById,
  updateServiceAnswerOption
} from '../../service/rouletteServices/AnswerOptionService.js';

async function createAnswerOption(req, res) {
  try {
    const answerOption = await createServiceAnswerOption(req.body);
    res.status(201).json(answerOption);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAnswerOptionById(req, res) {
  try {
    const answerOption = await getServiceAnswerOptionById(req.params.id);
    if (answerOption) {
      res.json(answerOption);
    } else {
      res.status(404).json({ error: 'Answer option not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllAnswerOptions(_req, res) {
  try {
    const answerOptions = await getServiceAllAnswerOptions();
    res.json(answerOptions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateAnswerOption(req, res) {
  try {
    const [updated] = await updateServiceAnswerOption(req.params.id, req.body);
    if (updated) {
      const updatedAnswerOption = await getServiceAnswerOptionById(
        req.params.id
      );
      res.json(updatedAnswerOption);
    } else {
      res.status(404).json({ error: 'Answer option not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteAnswerOption(req, res) {
  try {
    const deleted = await deleteServiceAnswerOption(req.params.id);
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Answer option not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export {
  createAnswerOption,
  getAnswerOptionById,
  getAllAnswerOptions,
  updateAnswerOption,
  deleteAnswerOption
};
