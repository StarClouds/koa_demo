const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

// 创建模型 
const User = seq.define('koa_user', {
  // id 自动创建
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名，唯一'
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码'
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否管理员,0:不是（默认）,1:是'
  }
})

// 强制同步数据库
// User.sync({force: true})

module.exports = User