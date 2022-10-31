const Koa = require('koa')
const koaBody = require("koa-body")

const errHanlder = require('./errHanlder')

const app = new Koa()
const userRouter = require('../router/user.route')
const layRouter = require('../router/lay.route')
app
.use(koaBody({
  multipart: true
}))
.use(userRouter.routes())
.use(layRouter.routes())
app.on('error', errHanlder)

module.exports = app