const router = require("express").Router()
const reportContoller = require('../controllers/report')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/',reportContoller.getReport)
router.post('/',reportContoller.addReport)
router.delete('/:id',authorization,reportContoller.deleteReport)

module.exports=router