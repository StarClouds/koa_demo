const { APP_PORT } = require('./config/config.default')
const app = require('./app/index')


app.listen(APP_PORT, () => {
  console.log(`serveri is running on http://loaclhost:${APP_PORT}@!`);
})