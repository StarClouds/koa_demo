const { createUser, getUserInfo } = require('../service/user.service')
class UserController {
  async register(ctx, next) {
    // 1获取参数
    const {user_name, password} = ctx.request.body

    // 2操作数据库
    const res = await createUser(user_name, password)
    // 3返回结果
    ctx.body = {
      code: 0,
      message: '注册成功',
      result: {
        id: res.id,
        user_name: res.user_name
      }
    }
  }
  async login(ctx, next) {
    ctx.body = '登录成功'
  }
}

module.exports = new UserController()