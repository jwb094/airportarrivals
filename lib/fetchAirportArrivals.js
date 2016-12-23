const rest = require('restler');
const searchAirportArrivals = require("../models/arrivals");

class FetchApiData {


    /** 
    This is a description
    * @method doFetchSearchFlightDetails
    * @param {String} airportcode - string
    * @return {Promise}  return  data called from API 
    * collect Arrival data from API call 
    */

    static doFetchSearchAirportArrivalsApiData(airportcode) {
        return new Promise(
            (resolve, reject) => {
                //using restler(rest) to call the api   - airportcode argument is the data from front end <a href> used a parameter 
                rest.get(`https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/tracks/${airportcode}/arr?appId=210fea33&appKey=c728ab5db81d7611d6deec2d00a17047&includeFlightPlan=false&maxPositions=2&maxFlights=20`).on('complete', function (arrivalResult) {
                    if (arrivalResult instanceof Error) {
                        // console.log('Error:', result.message);
                        reject(Error);
                    } else {
                        //make a new array
                        let arrivalArray = [];

                        for (let i in arrivalResult.flightTracks) {
                            try {
                                let arrivals = new searchAirportArrivals(arrivalResult.flightTracks[i]);
                                arrivalArray.push(arrivals);

                            } catch (e) {

                            }
                        }
                        resolve(arrivalArray);
                    }
                });
            }
        )
    }
}

module.exports = FetchApiData;