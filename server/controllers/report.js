const { Report } = require('../models')

class reportController{

static getReport(req,res){
    Report.findAll()
    .then(report =>{
        res.status(200).json(report)
    })
    .catch(err =>{
        res.status(404).json({message:"country is not found"})
    })
}

static addReport(req,res){
    let { cases, CountryId } = req.body
    console.log(req.payload,"ini")
    let input = {
        cases:req.body.cases,
        CountryId:req.body.CountryId,
        UserId: req.payload.data.id,
    }
    console.log("ini req.payload", req.payload)
    Report.create(input)
    .then(report =>{
        res.status(201).json(report)
    })
    .catch(err =>{
        res.status(500).json({message:"input data is fail"})
    })
}


static deleteReport(req,res){
    let id = {
        where:{
            id:req.params.id
        }
    }

    Report.destroy(id)
    .then(data =>{
        res.status(200).json(data)
    }).catch(err =>{
        res.statu(500).json({message: "Delete is fail"})
    })
}
}

module.exports=reportController