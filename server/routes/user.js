const router = require("express").Router()
const userContoller = require('../controllers/user')

router.post('/login',userContoller.login)

module.exports=router