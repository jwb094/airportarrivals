class FlightDetails {

    constructor(obj) {
        if (!obj.hasOwnProperty('appendix')) {
            throw new Error("Missing appendix");
        } else {
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