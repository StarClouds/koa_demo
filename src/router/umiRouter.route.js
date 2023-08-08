const Router = require('koa-router')

const router = new Router({prefix: '/api/umi'})

const { getList } = require('../controller/umi.controllse')

// 获取续标单详情
router.get('/getList', getList)

module.exports = router