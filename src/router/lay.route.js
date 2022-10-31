const Router = require('koa-router')

const router = new Router({prefix: '/api/lay'})

const { getDetail } = require('../controller/lay.controllse')

// 获取续标单详情
router.post('/getDetail', getDetail)

module.exports = router