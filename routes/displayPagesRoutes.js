const express = require('express');
const router = express.Router();
const displayPageController = require('../controllers/displayPagesController');

router.get("/",displayPageController.airportSection)

router.get("/arrivals", displayPageController.showAirports);

router.get("/flightDetails", displayPageController.showFlightData);

router.get("/backtohomepage", displayPageController.backToHomePage);

module.exports = router;