const router = require("express").Router()
const userRoutes = require('../routes/user')
const countryRoutes = require('../routes/country')
const reportRoutes = require('../routes/report')

router.use('/user',userRoutes)
router.use('/country',countryRoutes)
router.use('/report',reportRoutes)


module.exports=router