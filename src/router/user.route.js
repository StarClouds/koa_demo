const Router = require('koa-router');

const { userValidator, verifyUser } = require('../middleware/user.middleware');
const router = new Router({ prefix: '/user' });

const { register, login } = require('../controller/user.controllse');

// 注册接口
router.post('/register', userValidator, verifyUser, register);
// 登陆接口
router.post('/login', login);
module.exports = router;
