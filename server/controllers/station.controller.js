const Station = require('../models/station');
const Bike = require('../models/bike');

const stationCtrl = {};

stationCtrl.getStations = async (req,res)=>{
    const stations = await Station.find() //amb el find ja veiem totes les assignatures i els seus detalls 
        .populate({path: 'bikes'}); //faig servir el populate per veure directament el detall de l'alumna
    res.json(stations);
}

stationCtrl.getOneStation = async(req,res) => {
    const station = await Station.findById(req.params.id);
    res.json(station);
}

stationCtrl.createStation = async(req,res) => {
    const station = new Station({
        name: req.body.name,
        state: req.body.state,
        description: req.body.description,
        bikes: req.body.bikes
    });
    await station.save();
    res.json('received');
}

stationCtrl.editStation = async(req,res) => {
    const {id} = req.params;
    const bike = req.body.bikes;
    await Station.findByIdAndUpdate(id, {$push: {bikes: bike}});
    await Bike.findOneAndUpdate({"_id": bike}, {$set: {inStation: true}} );
    res.json({status: 'Station updated'});
}

stationCtrl.deleteStation = async(req,res) => {
    await Station.findByIdAndRemove(req.params.id);
    res.json({status: 'station deleted'});
}

module.exports = stationCtrl;