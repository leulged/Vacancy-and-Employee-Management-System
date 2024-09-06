// Services/categoryService.js
const AppDataSource = require('../Config/database');
const Category = require('../Models/Category');

const categoryRepository = AppDataSource.getRepository(Category);

const createCategory = async (categoryData) => {
    const category = categoryRepository.create(categoryData);
    return await categoryRepository.save(category);
};

const getAllCategories = async () => {
    return await categoryRepository.find();
};

const getCategoryById = async (id) => {
    return await categoryRepository.findOneBy({ id });
};

const updateCategory = async (id, categoryData) => {
    await categoryRepository.update(id, categoryData);
    return await getCategoryById(id);
};

const deleteCategory = async (id) => {
    return await categoryRepository.delete(id);
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};
