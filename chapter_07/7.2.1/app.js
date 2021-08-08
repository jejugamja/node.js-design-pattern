const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')
const http = require('http')

// 하드 코딩된 종속성
const authController = require('./lib/AuthController')

const app = module.exports = exporee()
app.use(bodyParser.json())

app.post('/login', authController.login)
app.get('/checkToken', authController.checkToken)
app.use(errorHandler())

http.createServer(app).listen(3000, () => {
  console.log('Express server started')
})