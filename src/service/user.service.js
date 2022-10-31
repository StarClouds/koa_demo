const User = require('../model/user.modal')

class UserService {
  async createUser (user_name, password) {
    // insert
    const res = await User.create({
      user_name,
      password,
    })
    // console.log(res);
    return res.dataValues
  }

  async getUserInfo({user_name, password, id, is_admin}) {
    const whereOpt = {}
    id && Object.assign(whereOpt, {id})
    password && Object.assign(whereOpt, {password})
    is_admin && Object.assign(whereOpt, {is_admin})
    user_name && Object.assign(whereOpt, {user_name})

    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt
    })
    return res ? res.dataValues : null
  }
}

module.exports = new UserService()