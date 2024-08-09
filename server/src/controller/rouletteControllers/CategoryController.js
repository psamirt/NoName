import {
  createServiceCategory,
  deleteServiceCategory,
  getServiceAllCategories,
  getServiceCategoryById,
  updateServiceCategory
} from '../../service/rouletteServices/CategoryService.js';

async function createCategory(req, res) {
  try {
    const category = await createServiceCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getCategoryById(req, res) {
  try {
    const category = await getServiceCategoryById(req.params.id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllCategories(_req, res) {
  try {
    const categories = await getServiceAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateCategory(req, res) {
  try {
    const [updated] = await updateServiceCategory(req.params.id, req.body);
    if (updated) {
      const updatedCategory = await getServiceCategoryById(req.params.id);
      res.json(updatedCategory);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteCategory(req, res) {
  try {
    const deleted = await deleteServiceCategory(req.params.id);
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export {
  createCategory,
  getCategoryById,
  getAllCategories,
  updateCategory,
  deleteCategory
};
