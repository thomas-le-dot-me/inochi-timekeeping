const UserController = require('./../controllers/user.ctrl');

module.exports = (router) => {
    /**
     * Add one user
     */
    router.route('/users').post(UserController.addOneUser);

}