class FlightDetails {

    //obj - JSON Object from API call
    constructor(obj) {
        console.log("in the model");
        console.log(obj);
        if (!obj.hasOwnProperty('appendix')) {
            throw new Error("Missing appendix");
        } else {
            //instancate object of "this" airport
            //"this" is of the class
            this.flightAirlineAppendix = obj.appendix;
            
        }

        if (!obj.hasOwnProperty('flightTrack')) {
            throw new Error("Missing flightTrack");
        } else {
            this.flightDetails = obj.flightTrack;
            console.log(obj.flightDetails);
        }


    }

}

module.exports = FlightDetails;