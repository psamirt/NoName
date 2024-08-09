import { Router } from "express";
import{
createAnswer,deleteAnswer,getAllAnswers,getAnswerById,updateAnswer
} from '../../controller/rouletteControllers/AnswerController.js';

const router = Router();

router.post('/', createAnswer);
router.get('/', getAllAnswers);
router.get('/:id', getAnswerById);
router.put('/:id', updateAnswer);
router.delete('/:id', deleteAnswer);

export default router