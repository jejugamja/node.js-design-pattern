
// 하드코딩한 종속성
const db = require('./db')
const users = db.sublevel('users')

const tokenSecret = 'SHH!'

exports.login = (username, password, callback) => {
  users.get(user, function(err, user) {
    // ...
  })
}

exports.checkToken = (token, callback) => {
  //...
  users.get(userData.username, function(err, user) {
    // ...
  })
}