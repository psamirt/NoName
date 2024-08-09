import { Router } from "express";
import{
createQuiz,deleteQuiz,getAllQuizzes,getQuizById,updateQuiz
} from '../../controller/rouletteControllers/QuizController.js';

const router = Router();

router.post('/', createQuiz);
router.get('/', getAllQuizzes);
router.get('/:id', getQuizById);
router.put('/:id', updateQuiz);
router.delete('/:id', deleteQuiz);

export default router