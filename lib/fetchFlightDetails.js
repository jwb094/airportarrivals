const rest = require('restler');

class FetchFlightDetailApiData {

      /** 
     This is a description
   * @method doFetchSearchFlightDetails
   * @param {Array} flightId - array
   * @return {Object}  return  data called from api
   * collect all flight details of given fligh ID
   */

    static doFetchSearchFlightDetails(flightId){
        console.log(flightId);
        return new Promise(
            (resolve, reject) => {
                rest.get(`https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${flightId}?appId=210fea33&appKey=c728ab5db81d7611d6deec2d00a17047`).on('complete', function(flightDetailsResult) {
                    if (flightDetailsResult instanceof Error) {
                       // console.log('Error:', result.message);
                        reject(flightDetailsResult);
                    } else {
                        console.log(flightDetailsResult);
                        resolve(flightDetailsResult);
                    }
                });
            }
        )
    }
}

module.exports = FetchFlightDetailApiData;