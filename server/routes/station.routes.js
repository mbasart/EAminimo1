const express = require('express');
const router = express.Router();

const station = require('../controllers/station.controller');
const bike = require('../controllers/bike.controller');

router.get('/stations', station.getStations); //Demanat al minim
router.get('/oneStation/:id',station.getOneStation);
router.post('/station', station.createStation);
router.put('/stationAdd/:id',station.editStationAdd); //Demanat al minim
router.put('/stationDelete/:id',station.editStationDelete);//Demanat al minim
router.delete('/station/:id', station.deleteStation); 

router.get('/unassigned',bike.unassignedBike); //Demanat al minim

router.get('/bikes', bike.getBike);
router.get('/oneBike/:id',bike.getOneBike);
router.post('/bike',bike.createBike);
router.delete('/bike/:id',bike.deleteBike); 

module.exports = router;