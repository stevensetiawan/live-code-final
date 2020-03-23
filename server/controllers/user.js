const { User } = require('../models')
const jwt = require('../helpers/jwt')

class userController{
    static login(req,res){
        let { username, password } = req.body

        console.log(req.body)

    let usernameFind = {
        where:{
            username: req.body.username
        }
    }

        User.findOne(usernameFind)
        .then(data =>{
            console.log("ini data",data)
            if (data){
                if(data.password==req.body.password){
                let token = jwt.generateToken({
                    id: data.id,
                    username : data.username
                })
                res.status(200).json({token,id:data.id,username:data.username})
            }else{
                res.status(500).json({message:"username or password is invalid"})
            }
            } else {
                res.status(404).json({message : "username is not found"})
            }
        })
        .catch(err =>{
            res.status(500).json({message : "internal server error",err})
        })

    }

}

module.exports = userController
