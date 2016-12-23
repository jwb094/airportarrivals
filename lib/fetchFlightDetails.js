const rest = require('restler');
const searchFlightDetails = require("../models/flightDetails");

class FetchFlightDetailApiData {

    /** 
   This is a description
 * @method doFetchSearchFlightDetails
 * @param {Int} flightId - Integer
 * @return {Promise}  return  data called from api
 * collect all flight details of given flightID
 */

    static doFetchSearchFlightDetails(flightId) {
        return new Promise(
            (resolve, reject) => {
                // calling the API with the arugements flightId as part of their parameters
                rest.get(`https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${flightId}?appId=210fea33&appKey=c728ab5db81d7611d6deec2d00a17047`).on('complete', function (flightDetailsResult) {
                    // paramter flightDetailsResult respresents JSON Object from API call
                    if (flightDetailsResult instanceof Error) {
                        // console.log('Error:', result.message);
                        reject(flightDetailsResult);
                    } else {
                        /* this code is suppose to go to the model class searchFlightDetails
                         * for each object in the JSON Object  
                         *  instanciate a new Object in searchFlightDetails model 
                         * the new object created in inserted into  array which will be resolved in the promise
                          */
                         let flightDetailsArray = [];

                         for (let i in flightDetailsResult) {
                               //console.log("flightDetailsResult[i]" + flightDetailsResult);
                             try {
                                 let flight = new searchFlightDetails(flightDetailsResult[i]);

                                 flightDetailsArray.push(flight);

                                  //console.log(flight);
                             } catch (e) {

                             }
                         }
                            
                        //console.log(flightDetailsArray);
                        resolve(flightDetailsResult);
                    }
                });
            }
        )
    }
}

module.exports = FetchFlightDetailApiData;