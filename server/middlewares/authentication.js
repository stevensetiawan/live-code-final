const jwt = require('../helpers/jwt')
const { User } = require('../models')

module.exports=(req,res,next)=>{
    let { token } = req.headers
    console.log(token)
    let payload = jwt.verifyToken(token)
    console.log("ini payload",payload)
    let findUser = {
        where:{
            username: payload.data.username
        }
    }
    User.findOne(findUser)
    .then(user =>{
        if(user){
        req.payload = payload
        next()
        } else {
            res.status(404).json({message:"user is not found"})
        }
    }).catch(err =>{
        res.status(500).json({message:"unautheticated"})
    })

}