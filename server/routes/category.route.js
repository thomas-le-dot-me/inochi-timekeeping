const categoryController = require('./../controllers/category.ctrl');

module.exports = (router) => {
    /**
     * adds a category
     */
    router.route('/categories').get(categoryController.getAllCategories);
    /**
     * adds a category
     */
    router.route('/category').post(categoryController.addCategory);
    /**
     * get a category
     */
    router.route('/category/:id').get(categoryController.getCategory);
    /**
     * delete a category
     */
    router.route('/category/:id').delete(categoryController.deleteCategory);
}