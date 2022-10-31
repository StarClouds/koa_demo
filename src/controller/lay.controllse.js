const mockData = require('../data/lay/xbd')
class UserController {
  async getDetail(ctx, next) {
    ctx.body = JSON.stringify(mockData)
  }
}

module.exports = new UserController()