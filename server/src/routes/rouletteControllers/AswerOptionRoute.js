import { Router } from "express";
import{
createAnswerOption,deleteAnswerOption,getAllAnswerOptions,getAnswerOptionById,updateAnswerOption
} from '../../controller/rouletteControllers/AnswerOptionController.js';

const router = Router();

router.post('/', createAnswerOption);
router.get('/', getAllAnswerOptions);
router.get('/:id', getAnswerOptionById);
router.put('/:id', updateAnswerOption);
router.delete('/:id', deleteAnswerOption);

export default router