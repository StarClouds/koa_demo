const Koa = require('koa')
const koaBody = require("koa-body")

const errHanlder = require('./errHanlder')

const app = new Koa()
const userRouter = require('../router/user.route')
const layRouter = require('../router/lay.route')
const umiRouter = require('../router/umiRouter.route')
app
.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'content-type')
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE')
  await next()
  // 允许所有跨域
  if (ctx.request.method === 'OPTIONS') {
    console.log('跨域请求')
    ctx.response.status = 200
    ctx.response.message = 'OK'
  }
})
.use(koaBody({
  multipart: true
}))
.use(userRouter.routes())
.use(layRouter.routes())
.use(umiRouter.routes())
app.on('error', errHanlder)

module.exports = app