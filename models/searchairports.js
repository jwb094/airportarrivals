class SearchAirports {

    constructor(obj) {
        
        if (!obj.hasOwnProperty('city')) {
            throw new Error("Missing City");
        } else {
            //instancate object of "this" airport
            this.city = obj.city;
        }

        if (!obj.hasOwnProperty('iata')) {
            throw new Error("Missing IATA");
        } else {
            this.iata = obj.iata;
        }

        if (!obj.hasOwnProperty('name')) {
            throw new Error("Missing Name");
        } else {
            this.name = obj.name;
        }

        if (!obj.hasOwnProperty('classification')) {
            throw new Error('Missing Classification');
        } else if (obj.classification > 3) {
            throw new Error("Aiport is too small");
        } else {
            this.classification = obj.classification;
        }

        

    }

}
module.exports = SearchAirports;   