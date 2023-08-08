// const { createUser, getUserInfo } = require('../service/user.service')
// import mockjs from 'mockjs'
const mockjs = require('mockjs')
const { delay } = require('../utils/index')
const dataList = mockjs.mock({
  'dataList|100': [
      {
          id: '@id',
          name: '@cname',
          score: '@integer(50-100)',
          city: '@city',
          time: '@date'
      } 
  ]
})
class UmiController {
  async getList(ctx, next) {
    await delay(2000)
    ctx.body = {
      code: 0,
      message: 'success',
      ...dataList
    }
  }

}

module.exports = new UmiController()