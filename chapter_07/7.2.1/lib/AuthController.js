
// 하드코딩된 종속성
const authService = require('./AuthService')

exports.login = (req, res, next) => {
  authService.login(req.body.username, req.body.password,
    (err, result) => {
      //...
    })
}

exports.checkToken = (req, res, next) => {
  authService.checkToken(req.query.token,
    (err, result) => {
      //...
    })
}