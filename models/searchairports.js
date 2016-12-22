class SearchAirports {
     constructor(obj){
               // for each object in the API data 
        for( let arrayitem in obj){
             let theDataObject = obj[arrayitem];
             //for each array
             for(let arrayindex = 0; arrayindex < theDataObject.length; arrayindex++ ){
                    this.name = theDataObject[arrayindex].name;
                    this.city = theDataObject[arrayindex].city;
                    this.countryName = theDataObject[arrayindex].countryName;
                    this.iata =  theDataObject[arrayindex].iata;
                }
        }
    }
}
 module.exports = SearchAirports;   