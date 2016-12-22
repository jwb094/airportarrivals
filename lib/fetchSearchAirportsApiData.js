const rest = require('restler');

class FetchApiData {


   /** 
   This is a description
   * @method doFetchSearchFlightDetails
   * @param {Array} locationLatLong - array
   * @return {Object}  return  data called from API 
   */

    static doFetchSearchAirportApiData(locationLatLong){
        return new Promise(
            (resolve, reject) => {
                //using restler (rest) to  call api - 'Airports with a 25 radiusmile' - locationLatLong argument is data from from previous promise used as parameters 
                rest.get(`https://api.flightstats.com/flex/airports/rest/v1/json/withinRadius/${locationLatLong[1]}/${locationLatLong[0]}/20?appId=210fea33&appKey=c728ab5db81d7611d6deec2d00a17047`).on('complete', function(airportResult) {
                    if (airportResult instanceof Error) {
                       // console.log('Error:', result.message);
                        reject(airportResult);
                    } else {
                        //console.log(result);
                        resolve(airportResult);
                    }
                });
            }
        )
    }
}

module.exports = FetchApiData;