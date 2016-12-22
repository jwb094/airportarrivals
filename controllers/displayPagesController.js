class PageController {

  // INDEX - GET //
    /**
   * This is a description
   * @method airportsection
   * @param {String} req - url link:/ string
   * @param {String} res -  string
   * @return {Object} return render index.ejs page  in posts default directory views
   */
  static airportsection(req , res) {
    res.render("posts/index")
    }

     /** 
     This is a description
   * @method showAirports
   * @param {String} req - url link:/arrivals string
   * @param {String} res -  string
   * @return {Object} return session object arrivaldetails in 
   * render arrivals.ejs page in posts default directory views
   */
  static showAirports(req , res) {
    res.render("posts/arrivals",  {
         // session object is stored in the page
        arrivaldetails: req.session.arrivals
    }); 
    }

    /** 
     This is a description
   * @method showFlightData
   * @param {String} req - url link:/flightDetails string
   * @param {String} res -  string
   * @return {Object}  return session object flightdetails 
   * render flightDetails.ejs page in posts default directory views
   */
  static showFlightData(req , res) {
    res.render("posts/flightDetails",  {
        // session object is stored in the page
        flightdetails: req.session.flights
    }); 
    }


  
}

module.exports = PageController;