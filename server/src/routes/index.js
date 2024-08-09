import { Router } from 'express';
import userRoutes from './userRoutes/userRoutes.js';
import categoryRoutes from './rouletteControllers/CategoryRoute.js';
import difficultyRoutes from './rouletteControllers/DifficultyRoute.js';
import gameRoutes from './rouletteControllers/RouletteRoute.js';
import gameByUserRoutes from './rouletteControllers/GameByUserRoute.js';
import resultRoutes from './rouletteControllers/ResultRoute.js';
import quizRoutes from './rouletteControllers/QuizRoute.js';
import answerRoutes from './rouletteControllers/AnswerRoute.js';
import answerOptionRoutes from './rouletteControllers/AswerOptionRoute.js';

const router = Router();

router.use('/user', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/difficulties', difficultyRoutes);
router.use('/games', gameRoutes);
router.use('/game-by-user', gameByUserRoutes);
router.use('/results', resultRoutes);
router.use('/quizzes', quizRoutes);
router.use('/answers', answerRoutes);
router.use('/answer-options', answerOptionRoutes);

export default router;
