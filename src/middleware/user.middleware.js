const { getUserInfo } = require('../service/user.service');
const {userFormateError, userAlreadyExited} = require('../constant/err.type')
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  // 合法性
  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body);
    ctx.app.emit('error', userFormateError, ctx)
    return;
  }
  await next();
};

const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body;
  if (await getUserInfo({ user_name })) {
    ctx.status = 409;
    ctx.body = {
      code: '10002',
      message: '用户已存在',
      result: '',
    };
    return;
  }  
  await next();
};

module.exports = {
  userValidator,
  verifyUser,
};
