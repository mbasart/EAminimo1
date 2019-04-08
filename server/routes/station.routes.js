const express = require('express');
const router = express.Router();

const station = require('../controllers/station.controller');
const bike = require('../controllers/bike.controller');

router.get('/stations', station.getStations); //DEMANAT EXPLICIT AL EXEMPLE
router.get('/oneStation/:id',station.getOneStation);
router.post('/station', station.createStation);
router.put('/station/:id',station.editStation); //DEMANAT EXPLICIT AL EXEMPLE 
router.delete('/station/:id', station.deleteStation); //pel minim del exemple no es demanat (crec que no funciona)

router.get('/bikes', bike.getBike);
router.get('/oneBike/:id',bike.getOneBike);
router.post('/bike',bike.createBike);
router.delete('/bike/:id',bike.deleteBike); //pel minim del exemple no es demanat 

module.exports = router;