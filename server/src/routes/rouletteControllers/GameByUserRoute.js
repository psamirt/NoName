import { Router } from "express";
import{
createGameByUser,deleteGameByUser,getAllGamesByUser,getGameByUserById,updateGameByUser
} from '../../controller/rouletteControllers/GameByUserController.js';

const router = Router();

router.post('/', createGameByUser);
router.get('/', getAllGamesByUser);
router.get('/:id', getGameByUserById);
router.put('/:id', updateGameByUser);
router.delete('/:id', deleteGameByUser);

export default router