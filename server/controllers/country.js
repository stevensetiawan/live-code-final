const { Country } = require('../models')

class countryController{

static getCountry(req,res){
    Country.findAll()
    .then(country =>{
        res.status(200).json(country)
    })
    .catch(err =>{
        res.status(404).json({message:"country is not found"})
    })
}

}

module.exports=countryController