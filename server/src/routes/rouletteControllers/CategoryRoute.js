import { Router } from "express";
import{
createCategory,deleteCategory,getAllCategories,getCategoryById,updateCategory
} from '../../controller/rouletteControllers/CategoryController.js';

const router = Router();

router.post('/', createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router