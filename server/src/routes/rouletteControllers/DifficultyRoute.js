import { Router } from "express";
import{
createDifficulty,deleteDifficulty,getAllDifficulties,getDifficultyById,updateDifficulty
} from '../../controller/rouletteControllers/DifficultyController.js';

const router = Router();

router.post('/', createDifficulty);
router.get('/', getAllDifficulties);
router.get('/:id', getDifficultyById);
router.put('/:id', updateDifficulty);
router.delete('/:id', deleteDifficulty);

export default router