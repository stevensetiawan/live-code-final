const { Report } = require('../models')


module.exports = (req,res,next)=>{
let idParams = {
    where:{
        id: req.params.id
    }
}

    Report.findOne(idParams)
    .then(data =>{
        if(data){
            if(data.UserId == req.payload.data.id){
                next()
            } else {
                res.status(403).json({message:"unauthorized"})
            }
        } else {
            res.status(404).json({message:"data is not found"})
        }
    }).catch(err =>{
        res.status(500).json({message:"internal server error"})
    })


}