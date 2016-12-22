class SearchAirports {

    constructor(obj) {
        // for each object in the API data 
        for( let arrayitem in obj){
            let theDataObject = obj[arrayitem];
            for(let arrayindex = 0; arrayindex < theDataObject.length; arrayindex++ ){
        
        if (!theDataObject[arrayindex].name){
            throw new Error("You must include a first name");
        } else if (typeof theDataObject[arrayindex].name != "string"){
            throw new Error("First name must be a string");
        } else {
            this.name = theDataObject[arrayindex].name;
        }

            if (theDataObject[arrayindex].name){
            throw new Error("You must include a first name");
        } else if (typeof obj.firstName != "string"){
            throw new Error("First name must be a string");
        } else {
            this.firstName = obj.firstName;
        }

        
    }
        }
     


    }
}
 module.exports = SearchAirports;   