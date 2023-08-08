// const { createUser, getUserInfo } = require('../service/user.service')
class UmiController {
  async getList(ctx, next) {
    // // 1获取参数
    // const {user_name, password} = ctx.request.body

    // // 2操作数据库
    // const res = await createUser(user_name, password)
    // // 3返回结果
    ctx.body = {
      code: 0,
      message: '注册成功',
      result: {}
    }
  }

}

module.exports = new UmiController()