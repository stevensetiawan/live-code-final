const router = require("express").Router()
const countryContoller = require('../controllers/country')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/',countryContoller.getCountry)

module.exports=router