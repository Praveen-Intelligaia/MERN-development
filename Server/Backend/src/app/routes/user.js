const controller = require('../controller/UserController');
function getUserList(ctx) { ctx.body = "User List Page" }

module.exports = function (app, Router) {
    const router = new Router({ prefix: '/user' });

    // router.get('user', '/', getUserHome);
    router.post('/sign-in',controller.signin);
    router.get('/about',controller.getUserList);
    router.post('/sign-up',controller.CreateUser);
    router.delete('/about',controller.deleteUser);
  
    // router.get('/test', controller.test);

    app.use(router.routes()).use(router.allowedMethods());
}