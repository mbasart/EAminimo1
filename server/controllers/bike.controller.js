const Bike = require('../models/bike');

const bikeCtrl = {};

bikeCtrl.getBike = async (req,res) => {
    const bike = await Bike.find();
    res.json(bike);

}

bikeCtrl.unassignedBike = async (req,res) => {
    const bike = await Bike.find({inStation: false});
    res.json(bike);
}

bikeCtrl.getOneBike = async(req, res) => {
    const bike = await Bike.findById(req.params.id);
    res.json(bike);
}

bikeCtrl.createBike = async (req,res)=> {
    const bike = new Bike(req.body);
    await bike.save();
    res.json(bike);
}

bikeCtrl.deleteBike = async(req,res) => {
    await Bike.findByIdAndRemove(req.params.id);
    res.json({status: 'Bike deleted'});
}

module.exports = bikeCtrl;