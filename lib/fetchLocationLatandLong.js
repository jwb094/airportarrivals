var NodeGeocoder = require('node-geocoder');


var options = {
  provider: 'google',


  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyAt_KMgQAceqfGmFTyZDvwHkXNCnW-yqPY',
  formatter: null         // 'gpx', 'string', ...
};

let geocoder = NodeGeocoder(options);

class FetchData {

    /** 
     This is a description
   * @method doFetchData
   * @param {String} AirportLocation - string
   * @return {Array}  return Array 
   * The Array contains latitude & longitude of Location,City,Address Entered
   */

  static doFetchData(AirportLocation){
   
      return new Promise(
          (resolve, reject) => {
            //the entered data is used to find relevant data, e.g. longitude,latitude, city 
              geocoder.geocode(AirportLocation)
                 .then(function(res) {
                    //collect assign variable to collect longitude & latitude 
                    let lat = res[0].latitude;
                    let long = res[0].longitude;
                    // the variables are stored as an array to be used as paramters in the APi link
                    resolve([lat,long]);
                  })
                  .catch(function(err) {
                    reject(err);
                });
           });
      }
}

module.exports = FetchData;